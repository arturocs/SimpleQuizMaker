<script lang="ts">
    import NewQuiz from "$lib/NewQuiz.svelte";
    import "../../app.css";
</script>

<svelte:head>
    <title>Crear nuevo cuestionario | Simple Quiz Maker</title>
    <meta name="description" content="Crea un nuevo cuestionario interactivo" />
</svelte:head>

<div class="container mx-auto px-4 py-6 max-w-4xl">
    <main class="p-6 rounded-lg shadow-xl">
        <NewQuiz />
    </main>

    <footer class="mt-8">
        <div class="mt-6">
            <a href="/" class="btn btn-outline btn-sm"> Volver al inicio </a>
        </div>
    </footer>
</div>