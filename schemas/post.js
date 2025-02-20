export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "isPreview", // The field name (must match your code)
      title: "Is Preview", // The label shown in Sanity Studio
      type: "boolean",
      description:
        "Check this box if the post should only be visible on the preview site.",
      initialValue: true, // Default value for new posts
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
