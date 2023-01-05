import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'job',
      title: 'Job',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }), 
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
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
      name: 'current',
      title: 'Current',
      type: 'boolean',
    }),
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'} }]
    }),
    defineField({
      name: 'bulletPoint',
      title: 'BulletPoint',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})
