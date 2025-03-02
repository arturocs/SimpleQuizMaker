<script lang="ts">
    import "../app.css";
    // Definición de tipos
    import type { OptionData } from "$lib/interfaces.ts";
    import XLg from "svelte-bootstrap-icons/lib/XLg.svelte";
    
    interface Props {
        options: OptionData[];
        option: OptionData;
        currentOptionIndex: number;
        removeOption: (index: number) => void;
    }

    let {
        options = $bindable(),
        option,
        currentOptionIndex,
        removeOption,
    }: Props = $props();
</script>

<div class="flex items-center gap-2">
    <div class="form-control flex-1 w-full">
        <div class="flex items-center gap-2 w-full">
            <input
                type="checkbox"
                bind:checked={option.isCorrect}
                aria-label="Marcar como respuesta correcta"
                class="checkbox checkbox-primary shrink-0"
            />
            <div class="grow w-full">
                <input
                    type="text"
                    placeholder="Texto de la respuesta"
                    bind:value={option.text}
                    aria-label="Texto de la opción de respuesta"
                    class="input input-bordered w-full"
                />
            </div>
        </div>
    </div>

    <button
        type="button"
        class="btn btn-square btn-error btn-sm shrink-0"
        onclick={() => removeOption(currentOptionIndex)}
        disabled={options.length <= 2}
        title={options.length <= 2
            ? "Se requieren al menos 2 opciones"
            : "Eliminar opción"}
        aria-label={options.length <= 2
            ? "Se requieren al menos 2 opciones"
            : "Eliminar opción"}
    >
        <XLg />
    </button>
</div>