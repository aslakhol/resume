export default {
  name: "role",
  title: "Role",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of role.",
    },
    {
      name: "organization",
      title: "Organization",
      type: "reference",
      to: { type: "organization" },
      description: "The organization that this role was linked to.",
    },
    {
      name: "long_name",
      title: "Long name",
      type: "string",
      description: "The full version of the name of the role.",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      description: "Short description of the role. One or two lines at most.",
    },
    {
      name: "long_description",
      title: "Long description",
      type: "text",
      description: "Longer description of the role.",
    },
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
      description: "Was this a paid role?",
    },
    {
      name: "start_date",
      title: "Start date",
      type: "date",
      description: "The date I assumed the role.",
    },
    {
      name: "end_date",
      title: "End date",
      type: "date",
      description: "The date the role ended. Leave blank if ongoing.",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "organization.name" },
  },
};
