<script>
    let message = "Hello, this is Svelte!";

    let { total_row } = $props();

    alert(message);
</script>

<style>
h1 {
    color: hsl(153, 47%, 49%);
}

span {
    color: hsl(153, 67%, 19%);
}
</style>

<main>
    <h1>{message} There are <span>{ total_row }</span> papers to look at...</h1>
</main>
