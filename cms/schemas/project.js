export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of project.",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "My role on this project.",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      description:
        "Short description of the project, one or two sentences max.",
    },
    {
      name: "long_description",
      title: "Long description",
      type: "string",
      description: "Long description of the project.",
    },
    {
      name: "learned_technologies",
      title: "Learned techonologies",
      type: "array",
      of: { type: "string" },
      description:
        "Technologies used in the project that I know and can use, including those I already knew from other projects.",
    },
    {
      name: "other_technologies",
      title: "Other technologies",
      type: "array",
      of: { type: "string" },
      description:
        "Technologies used in the project that I didn't personally work with and wouldn't say I know",
    },
    {
      name: "buzzwords",
      title: "Buzzwords",
      type: "array",
      of: { type: "string" },
      description:
        "Buzzwords that are relevant to the project. This is a good place to put keywords that don't fit in the technologies entry.",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
