<script lang="ts">
    import PlusLg from "svelte-bootstrap-icons/lib/PlusLg.svelte";
    import type { OptionData, QuestionData } from "$lib/interfaces.ts";
    import NewOption from "./NewOption.svelte";
    import "../app.css";
    import { LocalStore, localStore } from "./localStore.svelte";
    import { createEventDispatcher } from "svelte";

    // Definir las propiedades que recibe el componente
    interface Props {
        questionData: QuestionData;
        onUpdate?: (updatedQuestion: QuestionData) => void;
    }

    // Obtener las propiedades
    let { questionData, onUpdate }: Props = $props();

    // Estado para almacenar la información de la pregunta
    let question: string = $state(questionData.questionText);
    let options: OptionData[] = $state([...questionData.options]);

    // Estado para manejar la visibilidad del mensaje de éxito
    let showSuccessMessage: boolean = $state(false);

    // Crear el despachador de eventos para comunicar con el componente padre
    const dispatch = createEventDispatcher<{
        update: QuestionData;
        cancel: void;
    }>();

    // Función para añadir una nueva opción
    function addOption(): void {
        options = [...options, { text: "", isCorrect: false }];
    }

    // Función para eliminar una opción
    function removeOption(index: number): void {
        options = options.filter((_, i) => i !== index);
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

    // Función para guardar los cambios
    function saveChanges(): void {
        if (isFormValid()) {
            const updatedQuestion: QuestionData = {
                questionText: question,
                options: options,
            };

            // Llamar al callback si existe
            if (onUpdate) {
                onUpdate(updatedQuestion);
            }

            // Emitir evento para el componente padre
            dispatch("update", updatedQuestion);


        }
    }

    // Función para cancelar la edición
    function cancelEdit(): void {
        dispatch("cancel");
    }
</script>

<div class="card w-full max-w-3xl bg-base-100 mx-auto">
    <div class="card-body">
        <h2 class="card-title text-2xl font-bold">Editar pregunta</h2>

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

        <div class="card-actions justify-end mt-6 gap-2">
            <button type="button" class="btn btn-outline" onclick={cancelEdit}>
                Cancelar
            </button>
            <button
                type="button"
                class="btn btn-primary"
                disabled={!isFormValid()}
                onclick={saveChanges}
            >
                Guardar cambios
            </button>
        </div>
    </div>
</div>
