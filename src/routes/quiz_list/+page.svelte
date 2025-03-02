<script lang="ts">
    import { fade } from "svelte/transition";
    import { localStore, type LocalStore } from "$lib/localStore.svelte";
    import type { QuestionData } from "$lib/interfaces";
    import PencilFill from "svelte-bootstrap-icons/lib/PencilFill.svelte";
    import TrashFill from "svelte-bootstrap-icons/lib/TrashFill.svelte";
    import XCircleFill from "svelte-bootstrap-icons/lib/XCircleFill.svelte";
    import EditQuiz from "$lib/EditQuiz.svelte";
    import PlayFill from "svelte-bootstrap-icons/lib/PlayFill.svelte";
    import Quiz from "$lib/Quiz.svelte";
    import Download from "svelte-bootstrap-icons/lib/Download.svelte";
    import Upload from "svelte-bootstrap-icons/lib/Upload.svelte";
    import PlusLg from "svelte-bootstrap-icons/lib/PlusLg.svelte";
    import CheckCircleFill from "svelte-bootstrap-icons/lib/CheckCircleFill.svelte";

    // Estado para almacenar las preguntas
    let questions: LocalStore<QuestionData[]> = $state(
        localStore("questions", []),
    );

    // Estados para controlar los modales
    let showDeleteModal: boolean = $state(false);
    let showEditModal: boolean = $state(false);
    let showPlayModal: boolean = $state(false);
    let selectedQuestionIndex: number = $state(-1);
    // Mostrar mensaje de éxito
    let showSuccessMessage = $state(false);

    // Función para abrir el modal de borrado
    function openDeleteModal(index: number) {
        selectedQuestionIndex = index;
        showDeleteModal = true;
    }

    // Función para abrir el modal de edición
    function openEditModal(index: number) {
        selectedQuestionIndex = index;
        showEditModal = true;
    }

    // Función para abrir el modal de jugar test
    function openPlayModal(index: number) {
        selectedQuestionIndex = index;
        showPlayModal = true;
    }

    // Función para cerrar modales
    function closeModals() {
        showDeleteModal = false;
        showEditModal = false;
        showPlayModal = false;
        selectedQuestionIndex = -1;
    }

    // Función para borrar una pregunta
    function deleteQuestion() {
        if (selectedQuestionIndex >= 0) {
            questions.value = questions.value.filter(
                (_, index) => index !== selectedQuestionIndex,
            );
            closeModals();
        }
    }

    // Función para actualizar una pregunta
    function updateQuestion(updatedQuestion: QuestionData) {
        if (selectedQuestionIndex >= 0) {
            questions.value = questions.value.map((q, index) =>
                index === selectedQuestionIndex ? updatedQuestion : q,
            );
            closeModals();
        }
    }

    // Obtener un resumen del enunciado para mostrar en la lista
    function getQuestionSummary(
        questionText: string,
        maxLength: number = 60,
    ): string {
        if (questionText.length <= maxLength) return questionText;
        return questionText.substring(0, maxLength) + "...";
    }

    // Truncar el texto para evitar que sea demasiado largo
    function truncateOptions(options: any[]): string {
        const correctOptions = options
            .filter((opt) => opt.isCorrect)
            .map((opt) => opt.text);
        if (correctOptions.length === 0) return "Sin respuesta correcta";

        return correctOptions
            .map((opt) =>
                opt.length > 20 ? opt.substring(0, 20) + "..." : opt,
            )
            .join(", ");
    }

    // Función para exportar preguntas en formato JSON
    function exportQuestions() {
        // Convertir el array de preguntas a una cadena JSON formateada
        const jsonData = JSON.stringify(questions.value, null, 2);

        // Crear un blob con los datos JSON
        const blob = new Blob([jsonData], { type: "application/json" });

        // Crear una URL para el blob
        const url = URL.createObjectURL(blob);

        // Crear un elemento temporal para la descarga
        const a = document.createElement("a");
        a.href = url;
        a.download = `quiz-preguntas-${new Date().toISOString().slice(0, 10)}.json`;

        // Añadir el elemento al DOM, hacer clic y luego eliminarlo
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Liberar la URL del blob
        URL.revokeObjectURL(url);
    }

    // Función para importar preguntas desde un archivo JSON
    function importQuestions() {
        // Crear un elemento input de tipo archivo oculto
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";

        // Manejar el evento de cambio cuando se selecciona un archivo
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    // Intentar parsear el contenido como JSON
                    const importedQuestions = JSON.parse(
                        e.target?.result as string,
                    );

                    // Validación básica: verificar si es un array
                    if (!Array.isArray(importedQuestions)) {
                        alert(
                            "Formato de archivo inválido. Debe ser un array de preguntas.",
                        );
                        return;
                    }

                    // Validar cada pregunta (validación simple)
                    const isValid = importedQuestions.every(
                        (q) =>
                            q.questionText &&
                            Array.isArray(q.options) &&
                            q.options.length >= 2,
                    );

                    if (!isValid) {
                        alert("Algunas preguntas tienen un formato inválido.");
                        return;
                    }

                    // Añadir las preguntas importadas a las existentes
                    questions.value = [
                        ...questions.value,
                        ...importedQuestions,
                    ];

                    alert(
                        `${importedQuestions.length} preguntas importadas correctamente.`,
                    );
                } catch (error) {
                    alert("Error al procesar el archivo: " + error);
                }
            };

            reader.readAsText(file);
        };

        // Simular un clic en el input para abrir el diálogo de selección
        input.click();
    }
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl rounded-lg shadow-xl">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Listado de Preguntas</h1>
        <a href="/new_quiz" class="btn btn-outline btn-primary btn-sm gap-2">
            <PlusLg />
            Nueva pregunta
        </a>
    </div>

    {#if questions.value.length === 0}
        <div class="alert alert-info">
            <div>No hay preguntas guardadas. ¡Crea una nueva pregunta!</div>
        </div>
    {:else}
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Pregunta</th>
                        <th>Respuesta(s) Correcta(s)</th>
                        <th class="w-40">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {#each questions.value as question, index}
                        <tr class="hover">
                            <td>
                                <div class="font-medium">
                                    {getQuestionSummary(question.questionText)}
                                </div>
                            </td>
                            <td>
                                <div class="text-sm opacity-80">
                                    {truncateOptions(question.options)}
                                </div>
                            </td>
                            <td class="flex gap-2">
                                <button
                                    class="btn btn-sm btn-outline btn-success"
                                    title="Realizar test"
                                    onclick={() => openPlayModal(index)}
                                >
                                    <PlayFill />
                                </button>
                                <button
                                    class="btn btn-sm btn-outline btn-info"
                                    title="Editar pregunta"
                                    onclick={() => openEditModal(index)}
                                >
                                    <PencilFill />
                                </button>
                                <button
                                    class="btn btn-sm btn-outline btn-error"
                                    title="Borrar pregunta"
                                    onclick={() => openDeleteModal(index)}
                                >
                                    <TrashFill />
                                </button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
    {#if showSuccessMessage}
        <div
            class="alert alert-success mt-2 mb-4"
            transition:fade={{ duration: 300 }}
        >
            <div class="flex items-center gap-2">
                <CheckCircleFill class="flex-shrink-0 h-6 w-6" />
                <span>Cambios guardados correctamente</span>
            </div>
        </div>
    {/if}
    <div class="mt-6 flex gap-2">
        <a href="/" class="btn btn-outline btn-sm"> Volver al inicio </a>

        {#if questions.value.length > 0}
            <button
                class="btn btn-outline btn-info btn-sm gap-2"
                onclick={exportQuestions}
            >
                <Download />
                Exportar Preguntas
            </button>
        {/if}
        <button
            class="btn btn-outline btn-secondary btn-sm gap-2"
            onclick={importQuestions}
        >
            <Upload />
            Importar
        </button>
    </div>
</div>

<!-- Modal de realización de test -->
{#if showPlayModal && selectedQuestionIndex >= 0}
    <div class="modal modal-open">
        <div class="modal-box max-w-4xl w-11/12">
            <button
                class="btn btn-sm btn-circle absolute right-2 top-2"
                onclick={closeModals}>✕</button
            >
            <h3 class="font-bold text-xl mb-4">Realizar Test</h3>

            <Quiz question={questions.value[selectedQuestionIndex]} />

            <div class="modal-action">
                <button class="btn btn-primary" onclick={closeModals}
                    >Cerrar</button
                >
            </div>
        </div>
    </div>
{/if}

<!-- Modal de confirmación de borrado -->
{#if showDeleteModal}
    <div class="modal modal-open">
        <div class="modal-box">
            <h3 class="font-bold text-lg flex items-center gap-2">
                <XCircleFill class="text-error" />
                Confirmar borrado
            </h3>
            <p class="py-4">
                ¿Estás seguro de que quieres borrar esta pregunta? Esta acción
                no se puede deshacer.
            </p>
            <div class="modal-action">
                <button class="btn btn-outline" onclick={closeModals}
                    >Cancelar</button
                >
                <button class="btn btn-error" onclick={deleteQuestion}
                    >Borrar</button
                >
            </div>
        </div>
    </div>
{/if}

<!-- Modal de edición -->
{#if showEditModal && selectedQuestionIndex >= 0}
    <div class="modal modal-open">
        <div class="modal-box max-w-5xl w-11/12">
            <button
                class="btn btn-sm btn-circle absolute right-2 top-2"
                onclick={closeModals}>✕</button
            >

            <EditQuiz
                questionData={questions.value[selectedQuestionIndex]}
                onUpdate={(updatedQuestion) => {
                    updateQuestion(updatedQuestion);
                    showSuccessMessage = true;
                    // Ocultar mensaje después de 3 segundos

                    setTimeout(() => {
                        showSuccessMessage = false;
                    }, 3000);
                    closeModals();
                }}
                on:cancel={closeModals}
            />
        </div>
    </div>
{/if}
