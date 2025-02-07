<script>
    let { paper } = $props();
    let display_pdf = $state(false);
    let iframe_opened = $state(false);
    
    let iframe = $state(null);

    function handle_click(event) {
        const to_display = !display_pdf;

        if (!to_display) {  // If we are closing the pdf
            if (iframe) {
                iframe_opened = false;

                iframe.addEventListener('transitionend', () => {
                    display_pdf = to_display;
                }, { once: true });
            }
        }
        else {
            display_pdf = to_display;

            setTimeout(() => {
                iframe_opened = true
            }, 0);
        }
    }
</script>

<button class="card" onclick={handle_click}>
    <div class="filename">{paper.exam_paper}</div>
    <div class="semester">{paper.semester}</div>
    <div class="faculty">{paper.faculty}</div>
    {#if display_pdf}
        <iframe src={paper.pdf_link} title="{paper.exam_paper}" 
            bind:this={iframe} class={iframe_opened ? 'iframe-opened' : ''}></iframe>
    {/if}
</button>

<style>
    iframe {
        width: 100%;
        height: 0px;
        transition: height 0.3s ease-out, margin-top 0.3s ease-out;
        margin-top: 0px;
        
        border-color: #fdc3d2;
        border-width: 1px;

        box-sizing: border-box;
    }

    .iframe-opened {
        height: 850px;
        margin-top: 1rem;
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
