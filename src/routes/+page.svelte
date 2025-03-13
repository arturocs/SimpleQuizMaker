<script lang="ts">
    import "../app.css";
    import PlusCircleFill from "svelte-bootstrap-icons/lib/PlusCircleFill.svelte";
    import ListCheck from "svelte-bootstrap-icons/lib/ListCheck.svelte";
    import PlayCircleFill from "svelte-bootstrap-icons/lib/PlayCircleFill.svelte";
    import { localStore } from "$lib/localStore.svelte";
    import { base } from "$app/paths";
    // Obtenemos la cantidad de preguntas para mostrar en las estadísticas
    const questions = localStore("questions", []);
    const questionCount = $derived(questions.value.length);
</script>

<div class="hero min-h-[30vh] bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">SimpleQuizMaker</h1>
            <p class="py-6">
                Crea y practica con preguntas tipo test para preparar exámenes.
            </p>
            {#if questionCount > 0}
                <div class="badge badge-primary badge-lg">
                    {questionCount}
                    {questionCount === 1
                        ? "pregunta creada"
                        : "preguntas creadas"}
                </div>
            {/if}
        </div>
    </div>
</div>

<div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Tarjeta para Crear nuevas preguntas -->
        <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
        >
            <figure class="bg-primary/10 py-6">
                <PlusCircleFill class="text-primary" width="64" height="64" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Crear Preguntas</h2>
                <p>
                    Crea nuevas preguntas tipo test con múltiples opciones y
                    respuestas correctas.
                </p>
                <div class="card-actions justify-end">
                    <a href="{base}/new_quiz" class="btn btn-primary">Crear</a>
                </div>
            </div>
        </div>

        <!-- Tarjeta para Ver lista de preguntas -->
        <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
        >
            <figure class="bg-info/10 py-6">
                <ListCheck class="text-info" width="64" height="64" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Lista de Preguntas</h2>
                <p>
                    Visualiza, edita o elimina las preguntas que has creado.
                    Prueba cada pregunta individualmente.
                </p>
                <div class="card-actions justify-end">
                    <a href="{base}/quiz_list" class="btn btn-info">Ver Lista</a
                    >
                </div>
            </div>
        </div>

        <!-- Tarjeta para Practicar -->
        <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
        >
            <figure class="bg-success/10 py-6">
                <PlayCircleFill class="text-success" width="64" height="64" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Practicar Tests</h2>
                <p>
                    Practica con tests aleatorios y evalúa tu progreso. Obtén
                    estadísticas de rendimiento.
                </p>
                <div class="card-actions justify-end">
                    <a href="{base}/quiz_time" class="btn btn-success"
                        >Practicar</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
