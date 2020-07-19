export default {
  name: "account-link",
  title: "Account Link",
  type: "object",
  fields: [
    {
      name: "url",
      title: "Url",
      type: "url",
      description: "Url used to create link.",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
      description: "Username displayed on the CV.",
    },
  ],
};
