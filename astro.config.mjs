// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://blanquiton-web.github.io',
    base: 'blanquiton-web',
    integrations: [vue()]
});
