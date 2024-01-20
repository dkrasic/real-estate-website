import { getAboutUsSectionContent } from "@/sanity/sanity-utils";
import { HomeAboutUs } from "../components/HomeAboutUs";

export default async function Home() {
  const aboutUsContent = await getAboutUsSectionContent();

  return (
    <div>
      <HomeAboutUs content={aboutUsContent} />
    </div>
  );
}
