import tamplate from './tamplate.hbs';
import refs from './refs';
import { template } from 'handlebars';

export default {
    draw(data) {
        const obj = { arr: data };
        const createList = obj => template(obj);
        const listPhoto = createList(obj);
        refs.galleryList.insertAdjacentHTML('beforeend', listPhoto);
    },
    clean() {
        refs.galleryList.innerHTML = '';
    }
};