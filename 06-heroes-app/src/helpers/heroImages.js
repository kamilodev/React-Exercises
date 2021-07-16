let heroImages = () => ({ default: '' })

try {
	heroImages = require.context('../assets/heroes', true)
} catch (error) {}

export const loadImage = image => heroImages(`./${image}`).default
