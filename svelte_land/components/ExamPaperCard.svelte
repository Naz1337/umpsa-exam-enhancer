<script>
    import { slide } from 'svelte/transition';

    let { paper } = $props();
    let display_pdf = $state(false);
    let file_label = $state();

    function handle_click() {
        display_pdf = !display_pdf;
    }

    function onintroend() {
        if (typeof file_label === 'undefined') return;

        file_label.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

</script>

<button class="card" onclick={handle_click}>
    <div class="filename" bind:this={file_label}>{paper.exam_paper}</div>
    <div class="semester">{paper.semester}</div>
    <div class="faculty">{paper.faculty}</div>
    {#if display_pdf}
        <iframe src={paper.pdf_link} title="{paper.exam_paper}" 
         transition:slide {onintroend}></iframe>
    {/if}
</button>

<style>
    iframe {
        width: 100%;
        height: 90dvh;
        transition: height 0.3s ease-out, margin-top 0.3s ease-out;
        margin-top: 0px;
        
        border-color: #fdc3d2;
        border-width: 1px;

        box-sizing: border-box;
    }

    .filename {
        font-size: 1.25rem;
        font-weight: 600;
        color: #30030e;
    }

    .semester {
        color: #670e24;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .faculty {
        color: #a72545;
        font-weight: 600;

        font-size: 0.75rem;
        letter-spacing: 0.025rem;
    }

    button {
        all: unset;
        background: white; /* Ensure background is explicitly white */
        color: inherit; /* Keep text color the same as surrounding text */
        font: inherit; /* Keep the font consistent */
        cursor: pointer; /* Keep the pointer cursor for usability */
        box-sizing: border-box;
        display: block;
    }

    .card {
        width: 100%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        display: flex;

        flex-direction: column;

        box-shadow: 0px 5px 10px lightgray;
    }

    .card:hover {
        box-shadow: 0px 7px 15px lightgray;
    }
</style>
