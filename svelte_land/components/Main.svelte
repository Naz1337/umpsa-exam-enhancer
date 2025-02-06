<script>
    import ExamPaperCard from './ExamPaperCard.svelte';
    let { papers } = $props();
</script>

<style>
    * :global {
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        * {
            line-height: 1.5;
            font-family: system-ui, "Segoe UI", Roboto, 
                Helvetica, Arial, sans-serif, "Apple Color Emoji", 
                "Segoe UI Emoji", "Segoe UI Symbol";
            margin: 0;
        }
    }

    div {
        flex: 1 1 auto;
        
        display: flex;
        flex-direction: column;

        gap: 1.5rem;

        max-width: 900px;
        min-width: 380px;

    }
</style>

<svelte:head>
    <!-- Does this even work? -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div>
    {#each papers as paper}
        <ExamPaperCard paper={paper} />
    {/each}
</div>

