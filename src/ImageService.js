import servise from './apiService';
import tamplate from './tamplate.hbs';
import refs from './refs';


refs.form.addEventListener('submit', imageSearchInputHandler);
refs.loadMoreButton.addEventListener('click', loadMoreButtonHandler);


function imageSearchInputHandler(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.query;

    clearListItems();

    servise.resetPage();
    servise.searchQuerry = input.value;

    servise.fetchArticles().then(hits => {
        const markup = buildListItemsTemplate(hits);
        userItems(markup);
    });
    input.value = '';
};

function loadMoreButtonHandler() {
    servise.fetchArticles().then(hits => {
        const markup = buildListItemsTemplate(hits);
        userItems(markup);
        window.scrollTo(0, 1000);

        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    });
};
function userItems(items) {
    refs.galleryList.insertAdjacentHTML('beforeend', items);
};
function buildListItemsTemplate(items) {
    return tamplate(items);
};
function clearListItems() {
    refs.galleryList.innerHTML = '';
};