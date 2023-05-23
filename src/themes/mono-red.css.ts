import { createTheme } from '@vanilla-extract/css'
import { vars } from './_contract.css'

export const [monoRedThemeClass] = createTheme(vars, {
	color: {
		brand: 'red'
	},
	font: {
		body: 'monospace'
	}
})
