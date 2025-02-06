import './styles.css'
import { mount } from 'svelte';
import util from './util';

import Main from './components/Main.svelte';


const exam_paper_table_selector = 'body > table:nth-child(5)';
const exam_paper_table = document.querySelector(exam_paper_table_selector);

if (exam_paper_table === null) {
    throw new Error(`Could not find exam paper table with selector: ${exam_paper_table_selector}`);
};

const table_body = exam_paper_table.querySelector('tbody');
// const total_row = table_body.rows.length - 1;  // because the header for the table is not
                                                  // in thead but in tbody

const raw_papers = [];
for (let i = 1; i < table_body.rows.length; i++) {
    const row = table_body.rows[i];

    const paper = {
        no: row.cells[0].textContent,
        exam_paper: row.cells[1].textContent,
        semester: row.cells[2].textContent,
        faculty: row.cells[3].textContent,
        pdf_link: row.cells[4].querySelector('a').href,
    };

    // convert semester text to number
    paper.semester_numbered = util.parseStringToNumber(paper.semester);

    raw_papers.push(paper);
}

raw_papers.sort((a, b) => {  // this is descending order right?
    return b.semester_numbered - a.semester_numbered;
})

// for in subject code "BCI2313", there is multiple entry for the same semester
// with the exact same paper name. Therefore, need to remove dupes.
const papers = util.removeDuplicates(raw_papers, 'exam_paper', 'semester_numbered');

console.log(papers);  // we log it for now, this is tough work alright?

const main_container = document.createElement('div');
main_container.id = 'main_container';

document.body.insertBefore(main_container, exam_paper_table);

exam_paper_table.remove();

mount(Main, {
    target: main_container,
    props: {
        papers,
    }
});