export default {
  name: "reference",
  title: "Reference",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the reference.",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "Role that the reference had during our relationship.",
    },
    {
      name: "current_role",
      title: "Current Role",
      type: "string",
      description: "Current role of the reference.",
    },
    {
      name: "number",
      title: "Phone number",
      type: "string",
      description: "Phone number of the reference.",
    },
    {
      name: "email",
      title: "email",
      type: "string",
      description: "Email of the reference.",
    },
    {
      name: "linkedin",
      title: "LinkedIn profile",
      type: "URL",
      description: "LinkedIn profile URL of the reference.",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
