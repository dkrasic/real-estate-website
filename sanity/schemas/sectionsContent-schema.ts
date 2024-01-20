const sectionsContentSchema = {
  name: "sectionsContent",
  title: "Different section contents",
  type: "document",
  fields: [
    {
      title: "'About us' section at the home page",
      name: "aboutUsSectionContent",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default sectionsContentSchema;
