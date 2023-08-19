const property = {
  name: "property",
  title: "Property", // will be visible in sanity
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "size",
      title: "Size",
      description: "Size of the property in square meters",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      description: "Monthly rent amount in Euros",
      type: "number",
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {
          name: "street",
          title: "Street",
          type: "string",
        },
        {
          name: "streetNumber",
          title: "Street number",
          type: "string",
        },
        {
          name: "city",
          title: "City",
          type: "string",
        },
        {
          name: "postalCode",
          title: "Postal code",
          type: "number",
        },
        {
          name: "country",
          title: "Country",
          type: "string",
        },
      ],
    },
    {
      name: "floor",
      title: "Floor",
      description: "Floor of the property",
      type: "number",
    },
    {
      name: "numberOfFloors",
      title: "Number of floors",
      description: "Number of floors in the building",
      type: "number",
    },
    {
      name: "numberOfRooms",
      title: "Number of rooms",
      type: "number",
    },
    {
      name: "numberOfBedrooms",
      title: "Number of bedrooms",
      type: "number",
    },
    {
      name: "numberOfBathrooms",
      title: "Number of bathrooms",
      type: "number",
    },
    {
      name: "numberOfBalconies",
      title: "Number of balconies",
      type: "number",
    },
    {
      name: "totalBalconySize",
      title: "Total size of balconies",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "images",
      title: "Images",
      description: "Set of images of the property",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // enables zoom, etc. in sanity
          },
          fileds: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "groundPlan",
      title: "Ground plan",
      type: "image",
    },
  ],
};

export default property;
