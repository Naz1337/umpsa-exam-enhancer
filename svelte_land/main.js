import './styles.css'
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

const main_container = document.createElement('div');
main_container.id = 'main_container';

document.body.insertBefore(main_container, exam_paper_table);

exam_paper_table.remove();

mount(Temp, {
    target: main_container,
    props: {
        total_row,
    }
});