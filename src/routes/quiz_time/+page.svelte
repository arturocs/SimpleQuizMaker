<script lang="ts">
    import { onMount } from "svelte";
    import { localStore, type LocalStore } from "$lib/localStore.svelte";
    import type { QuestionData } from "$lib/interfaces";
    import Quiz from "$lib/Quiz.svelte";
    import CheckSquareFill from "svelte-bootstrap-icons/lib/CheckSquareFill.svelte";
    import XSquareFill from "svelte-bootstrap-icons/lib/XSquareFill.svelte";
    import ExclamationTriangle from "svelte-bootstrap-icons/lib/ExclamationTriangle.svelte";
    import { base } from "$app/paths";
    // Estado para almacenar las preguntas
    let questions: LocalStore<QuestionData[]> = $state(
        localStore("questions", []),
    );

    // Estado para el quiz
    let availableQuestions: number[] = $state([]);
    let currentQuestionIndex: number = $state(-1);
    let currentQuestion: QuestionData | null = $state(null);
    let answeredCorrectly: boolean = $state(false);
    let isAnswered: boolean = $state(false);
    let correctAnswers: number = $state(0);
    let totalAnswered: number = $state(0);
    let quizCompleted: boolean = $state(false);

    // Inicializar el quiz cuando se monta el componente
    onMount(() => {
        initializeQuiz();
    });

    // Función para inicializar el quiz
    function initializeQuiz() {
        if (questions.value.length === 0) {
            return;
        }

        // Crear array con índices de todas las preguntas disponibles
        availableQuestions = Array.from(
            { length: questions.value.length },
            (_, i) => i,
        );

        // Reiniciar contadores
        correctAnswers = 0;
        totalAnswered = 0;
        quizCompleted = false;

        // Seleccionar primera pregunta
        selectNextQuestion();
    }

    // Función para seleccionar la siguiente pregunta aleatoriamente
    function selectNextQuestion() {
        if (availableQuestions.length === 0) {
            // No hay más preguntas disponibles
            quizCompleted = true;
            currentQuestion = null;
            return;
        }

        // Elegir un índice aleatorio del array de preguntas disponibles
        const randomIndex = Math.floor(
            Math.random() * availableQuestions.length,
        );

        // Obtener el índice real de la pregunta y eliminarla de las disponibles
        currentQuestionIndex = availableQuestions[randomIndex];
        availableQuestions.splice(randomIndex, 1);

        // Actualizar preguntas disponibles (necesario para la reactividad)
        availableQuestions = [...availableQuestions];

        // Establecer la pregunta actual
        currentQuestion = questions.value[currentQuestionIndex];
        isAnswered = false;
    }

    // Función para manejar la respuesta del usuario
    function handleQuizAnswered(isCorrect: boolean) {
        answeredCorrectly = isCorrect;
        isAnswered = true;
        totalAnswered++;

        if (isCorrect) {
            correctAnswers++;
        }
    }

    // Función para reiniciar el quiz
    function restartQuiz() {
        initializeQuiz();
    }
</script>

<div class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-center">Test Aleatorio</h1>
        <a href="{base}/" class="btn btn-outline btn-sm"> Volver al inicio </a>
    </div>

    <!-- Contador de progreso -->
    <div class="stats shadow w-full mb-6">
        <div class="stat">
            <div class="stat-title">Progreso</div>
            <div class="stat-value text-primary">
                {totalAnswered}/{questions.value.length}
            </div>
            <div class="stat-desc">Preguntas respondidas</div>
        </div>

        <div class="stat">
            <div class="stat-title">Puntuación</div>
            <div class="stat-value text-success">{correctAnswers}</div>
            <div class="stat-desc">Respuestas correctas</div>
        </div>

        <div class="stat">
            <div class="stat-title">Precisión</div>
            <div class="stat-value">
                {totalAnswered > 0
                    ? Math.round((correctAnswers / totalAnswered) * 100)
                    : 0}%
            </div>
            <div class="stat-desc">Porcentaje de aciertos</div>
        </div>
    </div>

    {#if questions.value.length === 0}
        <div class="alert alert-warning">
            <div class="flex items-center gap-2">
                <div class="flex-none">
                    <ExclamationTriangle />
                </div>
                <span>
                    No hay preguntas disponibles. Por favor, crea algunas
                    preguntas primero.
                </span>
            </div>
            <div class="flex-none">
                <a href="{base}/" class="btn btn-sm whitespace-nowrap">Volver al inicio</a>
            </div>
        </div>
    {:else if quizCompleted}
        <!-- Resumen final -->
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl">¡Quiz completado!</h2>
                <p class="mb-4">
                    Has respondido {correctAnswers} de {totalAnswered} preguntas
                    correctamente.
                </p>

                <div class="stats shadow my-4">
                    <div class="stat">
                        <div class="stat-figure text-success">
                            <CheckSquareFill width="40" height="40" />
                        </div>
                        <div class="stat-title">Aciertos</div>
                        <div class="stat-value text-success">
                            {correctAnswers}
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-error">
                            <XSquareFill width="40" height="40" />
                        </div>
                        <div class="stat-title">Fallos</div>
                        <div class="stat-value text-error">
                            {totalAnswered - correctAnswers}
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-value">
                            {totalAnswered > 0
                                ? Math.round(
                                      (correctAnswers / totalAnswered) * 100,
                                  )
                                : 0}%
                        </div>
                        <div class="stat-title">Precisión</div>
                    </div>
                </div>

                <div class="card-actions">
                    <button class="btn btn-primary" onclick={restartQuiz}>
                        Volver a jugar
                    </button>
                    <a href="{base}/" class="btn btn-outline">
                        Volver al inicio
                    </a>
                </div>
            </div>
        </div>
    {:else if currentQuestion}
        <!-- Quiz actual -->
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <!-- Usamos una clave única para forzar la recreación completa -->
                {#key currentQuestionIndex}
                    <Quiz
                        question={currentQuestion}
                        bind:isCorrect={answeredCorrectly}
                        on:answered={(e) => handleQuizAnswered(e.detail)}
                    />
                {/key}

                {#if isAnswered}
                    <div class="card-actions justify-center mt-4">
                        <button
                            class="btn btn-lg btn-primary"
                            onclick={selectNextQuestion}
                        >
                            {availableQuestions.length > 0
                                ? "Siguiente pregunta"
                                : "Ver resultados"}
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>
