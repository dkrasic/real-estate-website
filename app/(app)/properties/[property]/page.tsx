import { getProperty } from "@/sanity/sanity-utils";
import Image from "next/image";

type Props = {
  params: { property: string };
};

export default async function Property({ params }: Props) {
  const slug = params.property;
  const property = await getProperty(slug);

  return (
    <div>
      <h3>{property.title}</h3>
      <p>Price: {property.price} €/month</p>
      <p>Size: {property.size}m2</p>
      {property.images.map((imageUrl: string) => (
        <Image
          key={imageUrl}
          src={imageUrl}
          alt="No image"
          // images should not have fixed width and height
          width={300}
          height={200}
        />
      ))}
      <p>Rooms: {property.numberOfRooms}</p>
    </div>
  );
}
