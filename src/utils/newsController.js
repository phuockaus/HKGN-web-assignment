const axios = require('axios')

export default async function getNews() {
  const promise = axios.get('http://localhost:3000/news')
  const dataPromise = promise
    .then((response) => response.data)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}

export async function updateNews(newsID, input) {
  const promise = axios.put(`http://localhost:3000/news/${newsID}`, {
    title: input.title,
    image_link: input.image,
    content: input.description,
    position: parseInt(input.position, 10)
  })
  const dataPromise = promise
    .then((response) => console.log(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}

export async function createNews(input) {
  const promise = axios.post('http://localhost:3000/news', {
    title: input.title,
    image_link: input.image,
    content: input.description,
    position: parseInt(input.position, 10)
  })
  const dataPromise = promise
    .then((response) => console.log(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}

export async function deleteNews(newsID) {
  const promise = axios.delete(`http://localhost:3000/news/${newsID}`)
  const dataPromise = promise
    .then((response) => response.data)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}
