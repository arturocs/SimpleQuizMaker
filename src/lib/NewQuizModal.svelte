<script lang="ts">
    import CheckCircleFill from "svelte-bootstrap-icons/lib/CheckCircleFill.svelte";
    import { goto } from "$app/navigation";

    interface Props {
        show: boolean;
        onCreateNew: () => void;
        onClose: () => void;
    }

    let { show = false, onCreateNew, onClose }: Props = $props();

    // Funciones de navegación
    function navigateTo(path: string): void {
        goto(path);
    }
</script>

{#if show}
    <div class="modal modal-open">
        <div class="modal-box max-w-4xl w-11/12">
            <div class="flex items-center gap-3 mb-4">
                <CheckCircleFill class="text-success text-2xl" />
                <h3 class="font-bold text-lg">¡Pregunta guardada con éxito!</h3>
            </div>
            <p class="py-4">¿Qué te gustaría hacer ahora?</p>
            <div class="modal-action flex flex-wrap gap-2">
                <button class="btn btn-primary" onclick={onCreateNew}>
                    Crear otra pregunta
                </button>
                <button
                    class="btn btn-outline"
                    onclick={() => navigateTo("/")}
                >
                    Ir al inicio
                </button>
                <button
                    class="btn btn-outline"
                    onclick={() => navigateTo("/quiz_list")}
                >
                    Ver lista de quizzes
                </button>
                <button
                    class="btn btn-outline"
                    onclick={() => navigateTo("/quiz_time")}
                >
                    Jugar quizzes
                </button>
            </div>
        </div>
    </div>
{/if}
