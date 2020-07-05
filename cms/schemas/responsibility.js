export default {
  name: "responsibility",
  title: "Responsibility",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of responsibility.",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      description: "Type of responsibility",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      description:
        "Short description of the responsibility. One or two lines at most.",
    },
    {
      name: "long_description",
      title: "Long description",
      type: "string",
      description: "Longer description of the responsibility.",
    },
    {
      name: "start_date",
      title: "Start date",
      type: "date",
      description: "The date the responsibility started.",
    },
    {
      name: "end_date",
      title: "End date",
      type: "date",
      description: "The date the responsibility ended. Leave blank if ongoing.",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
