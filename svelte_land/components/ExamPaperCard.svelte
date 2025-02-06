<script>
    let { paper } = $props();

    // paper = JSON.stringify(paper, null, 2);
</script>

<style>
    .card {
        width: 100%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        display: flex;

        flex-direction: column;
        align-items: start;
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
</style>

<div class="card">
    <div class="filename">{paper.exam_paper}</div>
    <div class="semester">{paper.semester}</div>
    <div class="faculty">{paper.faculty}</div>
</div>