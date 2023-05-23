import { createTheme } from '@vanilla-extract/css'
import { vars } from './_contract.css'

export const [sansBlueThemeClass] = createTheme(vars, {
	color: {
		brand: 'cyan',
		text: 'white',
	},
	font: {
		body: 'sans-serif',
	},
})
