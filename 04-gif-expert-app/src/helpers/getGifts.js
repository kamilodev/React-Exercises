export const getGifts = async category => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category,
	)}&limit=20&api_key=qzy3xDwVahhobnzwk79PsW3ZxZQpDDVh`
	const resp = await fetch(url)
	const { data } = await resp.json()

	const gifts = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		}
	})

	return gifts
}
