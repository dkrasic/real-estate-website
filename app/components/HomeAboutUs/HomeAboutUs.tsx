"use client";

import { AboutUsSectionContent } from "@/types/SectionsContent";
import styles from "./HamburgerIcon.module.scss";

type HomeAboutUsProps = {
  content: AboutUsSectionContent;
};

export function HomeAboutUs({ content }: HomeAboutUsProps) {
  return <div>{content.text}</div>;
}
