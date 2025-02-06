<script>
    let { paper } = $props();

    paper = JSON.stringify(paper, null, 2);
</script>

<style>
    div {
        width: 100%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        display: flex;
        gap: 1rem;
    }  
</style>

<div>
    {paper}
</div>