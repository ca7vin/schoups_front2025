let fetchPromise: Promise<void> | null = null

export const useContent = () => {
  const content = useState('content', () => null)
  const isLoaded = useState('content_loaded', () => false)

  const fetchContent = async () => {
    if (isLoaded.value) return

    if (!fetchPromise) {
      fetchPromise = (async () => {
        const response = await fetch('https://schoups25back-production.up.railway.app/api/onepagecontent')
        content.value = await response.json()
        isLoaded.value = true
      })()
    }

    await fetchPromise
  }

  return {
    content,
    fetchContent
  }
}
