export default {
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of program.",
    },
    {
      name: "institution",
      title: "Institution",
      type: "reference",
      to: [{ type: "organization" }],
      description: "The institution the program belongs to.",
    },
    {
      name: "start_date",
      title: "Start date",
      type: "date",
      description: "The date I started on the program.",
    },
    {
      name: "end_date",
      title: "End date",
      type: "date",
      description: "The date I ended the program, leave blank if ongoing.",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
