import { StaticImageData } from "next/image";

export interface projectProps {
  image: StaticImageData;
  name: string;
  description: string;
  link: string;
}