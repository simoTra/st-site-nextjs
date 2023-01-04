import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'shortBio',
      title: 'ShortBio',
      type: 'string',
    }), 
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }), 
    defineField({
      name: 'homePageImage',
      title: 'HomePageImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bioImage',
      title: 'BioImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
