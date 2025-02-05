import { mount } from 'svelte';
import Temp from './components/Temp.svelte';

const app = mount(Temp, {
    target: document.body,
})

export default app;