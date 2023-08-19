import { Address } from "./Address";

export type Property = {
  _id: string;
  createdAt: string;
  slug: string;
  title: string;
  price: number;
  floor: number;
  numberOfFloors: number;
  type: PropertyType;
  size: number;
  numberOfBalconies: number;
  totalBalconySize: number;
  numberOfRooms: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  address: Address;
  propertyDescription: string;
  locationDescription: string;
  furnishingDescription: string;
  otherDescription: string;
  images: string[]; // should be array of image URLs
  groundPlan: string; // should be only image URL
  cellarSize: number;
  gardenSize: number;
  parking: number;
  availableFrom: Date;
  availabeUntil: Date | undefined;
  depositAmount: number;
  heatingCosts: number;
  internetSpeed: string;
  internetCosts: string;
  otherCosts: string;
  energyCertificate: string;
};

export type PropertyType =
  | "attic"
  | "base-floor"
  | "duplex"
  | "garden-apartment"
  | "studio"
  | "penthouse";
