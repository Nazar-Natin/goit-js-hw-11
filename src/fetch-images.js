// ## Initializing ##
import axios from 'axios';
import Notiflix from 'notiflix';
const BASE_URL = 'https://pixabay.com/api/';

const params = new URLSearchParams({
  q: undefined,
  key: '40491977-4d771312700760bcb76f7c497',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
});

export async function getImages(text) {
  params.set('q', text.trim());
  if (!params.get('q')) {
    Notiflix.Notify.failure("Don't do it!");
    return;
  } else {
    params.set('page', 1);
    return await axios.get(`${BASE_URL}?${params}`);
  }
}

export async function getImagesNext() {
  params.set('page', Number(params.get('page')) + 1);
  return await axios.get(`${BASE_URL}?${params}`);
}
