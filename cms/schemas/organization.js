export default {
  name: "organization",
  title: "Organization",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of organization.",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Short description of the organization.",
    },
    {
      name: "city",
      title: "City",
      type: "array",
      of: [{ type: "string" }],
      description: "The city or cities that the organization is located in.",
    },
    {
      name: "country",
      title: "Country",
      type: "array",
      of: [{ type: "string" }],
      description:
        "The country or countries that the organization is located in.",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
