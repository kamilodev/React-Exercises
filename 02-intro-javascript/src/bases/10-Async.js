// const getImagePromise = () => new Promise((res) => res('http:algo.com'))
// getImagePromise().then(console.log)

const getImage = async () => {
	try {
		const apiKey = 'qzy3xDwVahhobnzwk79PsW3ZxZQpDDVh'
		const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
		const { data } = await respuesta.json()

		const { url } = data.images.original
		const img = document.createElement('img')
		img.src = url
		document.body.append(img)
	} catch (error) {
		// manejo del error
		console.error(error)
	}
}

getImage()

// peticion
// 	.then((res) => res.json())
// 	.then(({ data }) => {
// 		const { url } = data.images.original

// 		const img = document.createElement('img')
// 		img.src = url
// 		document.body.append(img)
// 	})

// 	.catch(console.warn)
