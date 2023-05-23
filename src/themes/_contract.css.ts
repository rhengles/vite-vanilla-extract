import { createThemeContract, style } from '@vanilla-extract/css'

export const vars = createThemeContract({
	color: {
		brand: null,
		text: null,
	},
	font: {
		body: null,
	},
})

export const themeContainerClass = style({
	fontFamily: vars.font.body,
	color: vars.color.text,
	background: vars.color.brand,
})
