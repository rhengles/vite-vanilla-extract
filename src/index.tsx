import { render } from 'solid-js/web'
import App from './App'

// const root = document.getElementById('root')

const jbChat = {
	mount(
		{
			el,
			theme,
		}: {
			el: string | Element
			theme?: string | undefined
		}
	) {
		if ('string' === typeof el) {
			el = document.querySelector(el)!
		}

		// import.meta.env.DEV && 
		if (el instanceof HTMLElement) {
			render(() => <App themeClass={theme} />, el)
		}

		throw new Error(
			'jabberBrain Chat: jbChat.mount({ el }) Root element not found.'
		)
	}
}

export default jbChat
