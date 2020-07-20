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
      name: "website",
      title: "Website",
      type: "url",
      description:
        "Url of the website of the organization or other relevant link.",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      description:
        "Short description of the organization, one or two sentences max.",
    },
    {
      name: "parent_organization",
      title: "Parent organization",
      type: "reference",
      to: [{ type: "organization" }],
      description: "",
    },
    {
      name: "long_description",
      title: "Long description",
      type: "text",
      description: "Longer description of the organization.",
    },
    {
      name: "cities",
      title: "Cities",
      type: "array",
      of: [{ type: "string" }],
      description:
        "The city or cities that the organization is located in and that I worked in.",
    },
    {
      name: "countries",
      title: "Countries",
      type: "array",
      of: [{ type: "string" }],
      description:
        "The country or countries that the organization is located in and that I worked in.",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
