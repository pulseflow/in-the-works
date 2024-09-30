import {
	defineConfig,
	presetAttributify,
	presetUno,
	presetWebFonts,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetWebFonts({
			provider: 'fontsource',
			fonts: {
				sans: 'Inter',
				mono: 'Jetbrains Mono',
			},
		}),
	],
});
