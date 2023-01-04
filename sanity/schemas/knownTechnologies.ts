import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'knownTechnologies',
  title: 'KnownTechnologies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
      validation: (Rule) =>Rule.min(0).max(100)
    }), 

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
