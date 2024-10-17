import { Component, input } from '@angular/core';
import { AboutSectionType } from '../../enums/about-section-enum';
import { AboutComponent } from "../../sections/about/about.component";
import { AboutEducationComponent } from "../../sections/about-education/about-education.component";
import { AboutProjectsComponent } from "../../sections/about-projects/about-projects.component";
import { AboutTechnicalSkillsComponent } from "../../sections/about-technical-skills/about-technical-skills.component";
import { AboutWorkExperienceComponent } from "../../sections/about-work-experience/about-work-experience.component";

@Component({
  selector: 'app-about-section-content',
  standalone: true,
  imports: [AboutComponent, AboutEducationComponent, AboutProjectsComponent, AboutTechnicalSkillsComponent, AboutWorkExperienceComponent],
  templateUrl: './about-section-content.component.html',
  styleUrl: './about-section-content.component.scss'
})
export class AboutSectionContentComponent {
  sectionType = input<AboutSectionType>();
  AboutSectionType = AboutSectionType;
}
