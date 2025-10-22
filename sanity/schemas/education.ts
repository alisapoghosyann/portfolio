export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'institution',
      title: 'Institution Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'degree',
      title: 'Degree/Program',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0)
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}

