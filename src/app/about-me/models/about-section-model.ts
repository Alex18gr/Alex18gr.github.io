import { AboutSectionType } from "../enums/about-section-enum";

export interface AboutSection {
    label: string;
    icon?: any;
    type: AboutSectionType;
}