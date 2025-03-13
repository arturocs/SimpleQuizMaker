<script lang="ts">
    import "../app.css";
    import type { OptionData } from "$lib/interfaces";
    import CheckLg from "svelte-bootstrap-icons/lib/CheckLg.svelte";

    interface Props {
        option: OptionData;
        isSelected: boolean;
        isSubmitted: boolean;
        onSelectChange: (selected: boolean) => void;
    }

    let { option, isSelected, isSubmitted, onSelectChange }: Props = $props();

    // Función para manejar el cambio del checkbox
    function handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        onSelectChange(target.checked);
    }

    // Obtener el estilo de la opción basado en el estado
    function getOptionStyle() {
        if (!isSubmitted) return "";

        if (isSelected && option.isCorrect) {
            return "bg-success text-success-content";
        } else if (isSelected && !option.isCorrect) {
            return "bg-error text-error-content";
        } else if (!isSelected && option.isCorrect) {
            return "bg-warning text-warning-content";
        }

        return "";
    }

    function getOptionStyle2() {
        if (!isSubmitted) return "";

        if (!isSelected && !option.isCorrect) {
            return "";
        }

        return "border-none";
    }
</script>

<div class="flex items-center gap-2">
    <div
        class={`form-control flex-1 w-full rounded-lg transition-colors px-5 ${getOptionStyle()}`}
    >
        <div class="flex items-center gap-2 w-full">
            <input
                type="checkbox"
                checked={isSelected}
                onchange={handleChange}
                disabled={isSubmitted}
                class="checkbox checkbox-primary shrink-0"
            />

            <span class={`py-2 px-3 block border rounded-md bg-inherit w-full break-words whitespace-normal ${getOptionStyle2()}`}>
                {option.text}
            </span>
            {#if isSubmitted && option.isCorrect}
                <span class="text-success ml-2">
                    <CheckLg />
                </span>
            {/if}
        </div>
    </div>
</div>
