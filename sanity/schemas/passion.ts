import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'passion',
  title: 'Passion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }), 
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }), 
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'knownTechnologies'} }]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'initialData',
      title: 'InitialData',
      type: 'date',
    }),
    defineField({
      name: 'endData',
      title: 'EndData',
      type: 'date',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
