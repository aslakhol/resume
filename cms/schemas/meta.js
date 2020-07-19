export default {
  name: "meta",
  title: "Meta",
  type: "document",
  fields: [
    {
      name: "first_name",
      title: "First name",
      type: "string",
      description: "My first name.",
    },
    {
      name: "last_name",
      title: "Last name",
      type: "string",
      description: "My last name.",
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      description: "My email.",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "account-link",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      description: "Personal website.",
    },
    {
      name: "github",
      title: "Github",
      type: "account-link",
    },
    {
      name: "phone",
      title: "Phone number",
      type: "string",
      description: "My phone number.",
    },
    {
      name: "dob",
      title: "Date of birth",
      type: "date",
      description: "My date of birth.",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      description: "My address.",
    },
  ],
  preview: {
    select: { title: "first_name" },
  },
};
