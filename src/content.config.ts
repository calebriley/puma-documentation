import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

import { file } from 'astro/loaders';

const vocab = defineCollection({
  loader: file("src/data/vocab.json"),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	vocab: vocab,
};
