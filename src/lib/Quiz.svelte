<script lang="ts">
    import "../app.css";
    import type { QuestionData } from "$lib/interfaces";
    import CheckLg from "svelte-bootstrap-icons/lib/CheckLg.svelte";
    import XLg from "svelte-bootstrap-icons/lib/XLg.svelte";
    import Option from "./Option.svelte";
    import { createEventDispatcher, onMount } from "svelte";

    interface Props {
        question: QuestionData;
        isCorrect: boolean;
    }

    let { question, isCorrect = $bindable(false) }: Props = $props();

    // Crear despachador de eventos
    const dispatch = createEventDispatcher<{
        answered: boolean;
    }>();

    // Estado para las respuestas seleccionadas por el usuario
    let selectedOptions: boolean[] = $state([]);
    let isSubmitted: boolean = $state(false);
    let feedbackMessage: string = $state("");

    // Inicializar o reiniciar el estado cuando cambia la pregunta
    $effect(() => {
        resetState();
    });

    // Función para inicializar/reiniciar el estado
    function resetState() {
        selectedOptions = Array(question.options.length).fill(false);
        isSubmitted = false;
        feedbackMessage = "";
        isCorrect = false;
    }

    // Función para actualizar una selección específica
    function updateSelection(index: number, selected: boolean) {
        selectedOptions = selectedOptions.map((val, i) =>
            i === index ? selected : val,
        );
    }

    // Función para verificar si la respuesta es correcta
    function checkAnswer() {
        isSubmitted = true;

        // Comprueba si todas las opciones coinciden con las correctas
        const allCorrect = question.options.every((option, index) => {
            return selectedOptions[index] === option.isCorrect;
        });

        isCorrect = allCorrect;

        if (allCorrect) {
            feedbackMessage =
                "¡Correcto! Has seleccionado todas las respuestas correctas.";
        } else {
            feedbackMessage = "Incorrecto. Revisa tus selecciones.";
        }

        // Emitir evento con el resultado
        dispatch("answered", allCorrect);
    }

    // Resetear el test para intentarlo de nuevo
    function resetTest() {
        resetState();
    }
</script>

<h2 class="card-title text-2xl font-bold mb-4">Pregunta</h2>

<div class="mb-6">
    <p class="text-lg">{question.questionText}</p>
</div>

<div class="space-y-3">
    {#each question.options as option, index}
        <Option
            {option}
            isSelected={selectedOptions[index]}
            {isSubmitted}
            onSelectChange={(selected) => updateSelection(index, selected)}
        />
    {/each}
</div>

{#if feedbackMessage}
    <div class={`alert mt-4 ${isCorrect ? "alert-success" : "alert-error"}`}>
        <div>
            {#if isCorrect}
                <CheckLg />
            {:else}
                <XLg />
            {/if}
            <span>{feedbackMessage}</span>
        </div>
    </div>
{/if}

<div class="card-actions justify-end mt-6">
    {#if !isSubmitted}
        <button class="btn btn-primary" onclick={checkAnswer}>
            Comprobar respuesta
        </button>
    {:else}
        <button class="btn btn-outline" onclick={resetTest}>
            Intentar de nuevo
        </button>
    {/if}
</div>
<!-- <div class="card w-full max-w-3xl bg-base-100 shadow-xl mx-auto">
    <div class="card-body"></div>
</div> -->
