import { AboutSectionType } from "./enums/about-section-enum";
import { AboutSection } from "./models/about-section-model";
import { faGraduationCap, faMessage, faBriefcase, faScrewdriverWrench, faList } from '@fortawesome/free-solid-svg-icons';


export const aboutSections: AboutSection[] = [
    {
        label: 'About..',
        icon: faMessage,
        type: AboutSectionType.About
    },
    {
        label: 'Education',
        icon: faGraduationCap,
        type: AboutSectionType.Education
    },
    {
        label: 'Work Experience',
        icon: faBriefcase,
        type: AboutSectionType.WorkExperience
    },
    {
        label: 'Technical Skills',
        icon: faScrewdriverWrench,
        type: AboutSectionType.TechnicalSkills
    },
    {
        label: 'Projects',
        icon: faList,
        type: AboutSectionType.Projects
    }
];