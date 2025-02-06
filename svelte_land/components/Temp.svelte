<script>
    let message = "Hello, this is Svelte!";

    let { total_row } = $props();

    alert(message);
</script>

<style>
div {
    color: hsl(153, 47%, 49%);
    flex-grow: 1;
}

span {
    color: hsl(153, 67%, 19%);
}
</style>

<div>{message} There are <span>{ total_row }</span> papers to look at...</div>
