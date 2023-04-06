const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const fetchWord = async (queryParams) => {
  const fetchURL = `${BASE_URL}${queryParams}`

  try {
    const response = await fetch(fetchURL)
    const json = await response.json()

    if (response.status === 404) throw new Error('Not found')
    return { data: json, error: false }
  } catch (error) {
    return { data: {}, error: true }
  }
}

export default fetchWord
