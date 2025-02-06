<script>
    let { paper } = $props();
    let display_pdf = $state(false);
    // paper = JSON.stringify(paper, null, 2);
</script>

<button class="card" onclick={() => (display_pdf = !display_pdf)}>
    <div class="filename">{paper.exam_paper}</div>
    <div class="semester">{paper.semester}</div>
    <div class="faculty">{paper.faculty}</div>
    {#if display_pdf}
        <iframe src={paper.pdf_link} title="{paper.exam_paper}"></iframe>
    {/if}
</button>

<style>
    iframe {
        width: 100%;
        height: 850px;

        margin-top: 1rem;
    }

    .card {
        width: 100%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        display: flex;

        flex-direction: column;
        align-items: start;

        box-shadow: 0px 5px 10px lightgray;
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
</style>
