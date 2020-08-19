const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  async fetchArticles(query) {
      const keyapi = '17949255-e1d9ea9bdf94a67d1d5d88a2d';
      const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyapi}`;
      const res = await fetch(baseUrl + requestParams);
    const parseRes = await res.json();
    this.incrementPage();
    return parseRes.hits;
  },
  get searchQuerry() {
    return this.query;
  },
  set searchQuerry(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
