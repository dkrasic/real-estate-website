import { getProperties } from "@/sanity/sanity-utils";
import { PropertyCard } from "../../components/PropertyCard/PropertyCard";
import styles from "./styles.module.scss";

export default async function Properties() {
  const properties = await getProperties();

  return (
    <div className={styles.propertiesPage}>
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          title={property.title}
          size={property.size}
          price={property.price}
          address={property.address}
          imageUrl={property.images[0]}
          slug={property.slug}
        />
      ))}
    </div>
  );
}
