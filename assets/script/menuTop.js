const nav = document.querySelector('.scroll-inicio')
const scrollHeader = 'scroll-header'
const scrollContent = 'scroll-content'

const buttonFAB = document.querySelector('.FAB')
const FABStart = 'FAB-start'

const windowsInitial = (window.innerHeight * 1) / 9
const windowsCenter = (window.innerHeight * 3) / 4
const FABVisible = (window.innerHeight * 4) / 4

const scrollTop = () => {
	const windowsSetTop = nav.offsetTop

	if (windowsSetTop > windowsCenter) {
		nav.classList.remove(scrollHeader)
		nav.classList.add(scrollContent)
    } else if (windowsSetTop > windowsInitial) {
		nav.classList.remove(scrollContent)
		nav.classList.add(scrollHeader)
	} else {
		nav.classList.remove(scrollContent)
		nav.classList.remove(scrollHeader)
	}

	if (windowsSetTop > FABVisible) {
		buttonFAB.classList.add(FABStart)
	} else {
		buttonFAB.classList.remove(FABStart)
	}
}

scrollTop()

window.addEventListener('scroll', () => {
	scrollTop()
})