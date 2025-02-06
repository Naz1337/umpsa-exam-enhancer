<script>
    import ExamPaperCard from './ExamPaperCard.svelte';
    let { papers } = $props();
</script>

<style>
    :global(body) {
        font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * :global {
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        * {
            margin: 0;
        }
    }

    div {
        flex: 0 1 700px;
        
        display: flex;
        flex-direction: column;

        gap: 1.5rem;

    }
</style>

<div>
    {#each papers as paper}
        <ExamPaperCard paper={paper} />
    {/each}
</div>

