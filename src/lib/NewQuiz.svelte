<script lang="ts">
    import PlusLg from "svelte-bootstrap-icons/lib/PlusLg.svelte";
    import type { OptionData, QuestionData } from "$lib/interfaces.ts";
    import NewOption from "./NewOption.svelte";
    import "../app.css";
    import { LocalStore, localStore } from "./localStore.svelte";
    import NewQuizModal from "./NewQuizModal.svelte";

    interface Props {
        initialQuestion: string;
        initialOptions: OptionData[];
    }

    // Propiedades opcionales para el componente
    let { initialQuestion = "", initialOptions = [] }: Props = $props();

    // Estado para almacenar la información de la pregunta
    let question: string = $state(initialQuestion);
    let options: OptionData[] = $state(
        initialOptions.length > 0
            ? initialOptions
            : [
                  { text: "", isCorrect: false },
                  { text: "", isCorrect: false },
              ],
    );

    let questions: LocalStore<QuestionData[]> = $state(
        localStore("questions", []),
    );

    // Estado para controlar la visibilidad del modal
    let showSuccessModal: boolean = $state(false);

    function saveQuiz(questionData: QuestionData) {
        questions.value = [...questions.value, questionData];
        // Mostrar el modal después de guardar
        showSuccessModal = true;
    }

    // Función para añadir una nueva opción
    function addOption(): void {
        options = [...options, { text: "", isCorrect: false }];
    }

    // Función para manejar el cambio en una opción
    function handleOptionChange(
        index: number,
        field: keyof OptionData,
        value: string | boolean,
    ): void {
        options = options.map((option, i) => {
            if (i === index) {
                return { ...option, [field]: value };
            }
            return option;
        });
    }

    // Función para verificar si el formulario es válido
    function isFormValid(): boolean {
        return (
            question.trim() !== "" &&
            options.length >= 2 &&
            options.every((option) => option.text.trim() !== "") &&
            options.some((option) => option.isCorrect)
        );
    }

    function removeOption(index: number): void {
        options = options.filter((_, i) => i !== index);
    }

    // Función para guardar la pregunta
    function saveQuestion(): void {
        if (isFormValid()) {
            const questionData: QuestionData = {
                questionText: question,
                options: options,
            };
            saveQuiz(questionData);
        }
    }

    // Función para crear un nuevo quiz (resetea el formulario)
    function createNewQuiz(): void {
        question = "";
        options = [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
        ];
        showSuccessModal = false;
    }

    // Función para cerrar el modal
    function closeModal(): void {
        showSuccessModal = false;
    }
</script>

<div class="card w-full max-w-3xl bg-base-100 mx-auto">
    <div class="card-body">
        <h2 class="card-title text-2xl font-bold">Crear nueva pregunta</h2>

        <div class="form-control w-full pb-6">
            <label class="label" for="question-text">
                <span class="label-text font-medium"
                    >Enunciado de la pregunta:</span
                >
            </label>
            <textarea
                id="question-text"
                bind:value={question}
                placeholder="Escribe aquí el enunciado de la pregunta"
                rows="3"
                class="textarea textarea-bordered w-full"
            ></textarea>
        </div>

        <div class="mt-6">
            <h3 class="text-lg font-semibold mb-2">Opciones de respuesta</h3>

            <div class="space-y-3">
                {#each options as option, i}
                    <NewOption
                        {options}
                        {option}
                        currentOptionIndex={i}
                        {removeOption}
                    />
                {/each}
            </div>

            <button
                type="button"
                class="btn btn-success btn-sm mt-3"
                onclick={addOption}
            >
                <PlusLg />
                Añadir opción
            </button>
        </div>

        <div class="card-actions justify-end mt-6">
            <button
                type="button"
                class="btn btn-primary"
                disabled={!isFormValid()}
                onclick={saveQuestion}
            >
                Guardar pregunta
            </button>
        </div>
    </div>
</div>

<!-- Uso del componente modal -->
<NewQuizModal
    show={showSuccessModal}
    onCreateNew={createNewQuiz}
    onClose={closeModal}
/>
