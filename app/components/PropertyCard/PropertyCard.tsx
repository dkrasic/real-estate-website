import Image from "next/image";
import Link from "next/link";

import { Address } from "@/types/Address";
import styles from "./PropertyCard.module.scss";

type PropertyCardProps = {
  title: string;
  size: number;
  price: number;
  address: Address;
  imageUrl: string;
  slug: string;
};

export function PropertyCard({
  title,
  size,
  price,
  address,
  imageUrl,
  slug,
}: PropertyCardProps) {
  return (
    <Link href={`/properties/${slug}`}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt="No image" fill></Image>
        </div>
        <div className={styles.descWrapper}>
          <h3>{title}</h3>
          <p>Price: {price} €/month</p>
          <p>Size: {size}m2</p>
          <p>{`${address.street} ${address.streetNumber}, ${address.postalCode} ${address.city}`}</p>
        </div>
      </div>
    </Link>
  );
}
