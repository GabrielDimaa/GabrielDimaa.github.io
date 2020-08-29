const target = document.querySelectorAll('.anime')
const animeStart = 'anime-start'

const animeScroll = () => {
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

	target.forEach(element => {
		if ((windowTop) > element.offsetTop) {
			element.classList.add(animeStart)
		}
	})
}

animeScroll()

window.addEventListener('scroll', () => {
	animeScroll()
})