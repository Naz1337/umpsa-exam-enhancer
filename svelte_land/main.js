import { mount } from 'svelte';
import Temp from './components/Temp.svelte';


const exam_paper_table_selector = 'body > table:nth-child(5)';
const exam_paper_table = document.querySelector(exam_paper_table_selector);

if (exam_paper_table === null) {
    throw new Error(`Could not find exam paper table with selector: ${exam_paper_table_selector}`);
};

const table_body = exam_paper_table.querySelector('tbody');
const total_row = table_body.rows.length - 1;  // because the header for the table is not
                                               // in thead but in tbody

mount(Temp, {
    target: document.body,
    props: {
        total_row,
    }
});