export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      title: 'Homepage Carousel',
      name: 'carousel',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Body Content',
      name: 'body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
