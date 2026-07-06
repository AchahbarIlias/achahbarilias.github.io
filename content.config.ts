import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/**.json',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        description_short: z.string(),
        skills: z.array(z.string()),
        status: z.enum(['idea', 'progress', 'done']),
        type: z.enum(['professional', 'hobby']),
      })
    })
  }
})

