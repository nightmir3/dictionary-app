const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const fetcher = async (queryParams) => {
  const fetchURL = `${BASE_URL}${queryParams}`
  try {
    const response = await fetch(fetchURL)
    const json = await response.json()

    return Promise.resolve(json)
  } catch (error) {
    Promise.reject(error)
  }
}

export default fetcher