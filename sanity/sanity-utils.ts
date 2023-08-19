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
      propertyDescription,
      locationDescription,
      furnishingDescription,
      otherDescription,
      floor,
      type,
      cellarSize,
      gardenSize,
      parking,
      availableFrom,
      availableUntil,
      depositAmount,
      heatingCosts,
      internetCosts,
      otherCosts,
      numberOfFloors,
      "slug": slug.current,
      "images": images[].asset->url,
      "groundPlan": groundPlan.asset->url
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
      propertyDescription,
      locationDescription,
      furnishingDescription,
      otherDescription,
      floor,
      type,
      cellarSize,
      gardenSize,
      parking,
      availableFrom,
      availableUntil,
      depositAmount,
      heatingCosts,
      internetCosts,
      otherCosts,
      numberOfFloors,
      "slug": slug.current,
      "images": images[].asset->url,
      "groundPlan": groundPlan.asset->url
    }`,
    { slug }
  );

  // console.log("property: ", property);

  return property;
}
