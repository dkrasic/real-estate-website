import { Property } from "@/types/Property";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getProperties(): Promise<Property[]> {
  const properties = await createClient(config).fetch(
    groq`*[_type == "property"]{
      _id,
      _createdAt,
      title,
      address,
      size,
      price,
      numberOfRooms,
      numberOfBedrooms,
      numberOfBathrooms,
      numberOfBalconies,
      totalBalconySize,
      floor,
      numberOfFloors,
      "slug": slug.current,
      "images": images[].asset->url,
      groundPlan
    }[]`
  );

  // console.log("properties: ", properties);

  return properties;
}

export async function getProperty(slug: string): Promise<Property> {
  const property = await createClient(config).fetch(
    groq`*[_type == "property" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      address,
      size,
      price,
      numberOfRooms,
      numberOfBedrooms,
      numberOfBathrooms,
      numberOfBalconies,
      totalBalconySize,
      floor,
      numberOfFloors,
      "slug": slug.current,
      "images": images[].asset->url,
      groundPlan
    }`,
    { slug }
  );

  // console.log("property: ", property);

  return property;
}
