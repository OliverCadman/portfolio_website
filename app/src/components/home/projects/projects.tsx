import ThumbnailP1Lg from "../../../assets/images/thumbnail-project-1-large.webp";
import ThumbnailP1Small from "../../../assets/images/thumbnail-project-1-small.webp";
import ThumbnailP2Lg from "../../../assets/images/thumbnail-project-2-large.webp";
import ThumbnailP2Small from "../../../assets/images/thumbnail-project-2-small.webp";
import ThumbnailP3Lg from "../../../assets/images/thumbnail-project-3-large.webp";
import ThumbnailP3Small from "../../../assets/images/thumbnail-project-3-small.webp";
import ThumbnailP4Lg from "../../../assets/images/thumbnail-project-4-large.webp";
import ThumbnailP4Small from "../../../assets/images/thumbnail-project-4-small.webp";
import ThumbnailP5Lg from "../../../assets/images/thumbnail-project-5-large.webp";
import ThumbnailP5Small from "../../../assets/images/thumbnail-project-5-small.webp";
import ThumbnailP6Lg from "../../../assets/images/thumbnail-project-6-large.webp";
import ThumbnailP6Small from "../../../assets/images/thumbnail-project-6-small.webp";

import { Project } from "./types";

const projects: Project[] = [
  {
    title: "Design Portfolio",
    thumbnail_lg: ThumbnailP1Lg,
    thumbnail_sm: ThumbnailP1Small,
    technologies: ["HTML", "CSS"],
  },
  {
    title: "E-Learning Landing Page",
    thumbnail_lg: ThumbnailP2Lg,
    thumbnail_sm: ThumbnailP2Small,
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Todo Web App",
    thumbnail_lg: ThumbnailP3Lg,
    thumbnail_sm: ThumbnailP3Small,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Entertainment Web App",
    thumbnail_lg: ThumbnailP4Lg,
    thumbnail_sm: ThumbnailP4Small,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Memory Game",
    thumbnail_lg: ThumbnailP5Lg,
    thumbnail_sm: ThumbnailP5Small,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Art Gallery Showcase",
    thumbnail_lg: ThumbnailP6Lg,
    thumbnail_sm: ThumbnailP6Small,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default projects;
