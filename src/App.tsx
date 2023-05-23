import { Component, mergeProps } from 'solid-js'
import { themeContainerClass } from './themes/_contract.css'
import { sansBlueThemeClass } from './themes/sans-blue.css'

export interface AppProps {
	themeClass?: string | undefined
}

const App: Component<AppProps> = (props) => {
	const { themeClass } = mergeProps({ themeClass: sansBlueThemeClass }, props)
	return (
		<p class={`${themeClass} ${themeContainerClass}`}>
			Hello{' '}
			<a
				class=""
				href="https://antfu.me/posts/reimagine-atomic-css"
				target="atomic-css"
			>
				Atomic CSS
			</a>
			!
		</p>
	)
}

export default App
