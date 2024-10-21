import {Component, signal} from '@angular/core';
import {technicalSkills} from './technical-skills/technical-skills';
import {SkillItemComponent} from './skill-item/skill-item.component';

@Component({
  selector: 'app-about-technical-skills',
  standalone: true,
  imports: [
    SkillItemComponent
  ],
  templateUrl: './about-technical-skills.component.html',
  styleUrl: './about-technical-skills.component.scss'
})
export class AboutTechnicalSkillsComponent {
  technicalSkills = signal(technicalSkills);
}
