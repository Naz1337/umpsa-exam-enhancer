<script>
    import ExamPaperCard from "../svelte_land/components/ExamPaperCard.svelte";

    let paper = {
        exam_paper: "BCI2313 ALGORITHM & COMPLEXITY S2 2024.pdf",
        faculty: "FAKULTI KOMPUTERAN",
        no: "2",
        pdf_link: "https://apps-oss-ump-edu-my.libraryumpsa.idm.oclc.org/exam/uploads/BCI2313%20ALGORITHM%20&%20COMPLEXITY%20S2%202024.pdf",
        semester: "SEMESTER II SESSION 2023/2024",
        semester_numbered: 2023242
    }
</script>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div {
        flex: 0 0 auto;
        width: calc(600px + 2rem);
        padding: 1.5rem;

        border: 2px solid #000;

        align-self: center;
    }
</style>

<main>
    <h1>Design Place</h1>

    <div>
        <ExamPaperCard {paper}/>
    </div>
</main>