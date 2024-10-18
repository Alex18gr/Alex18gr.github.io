import { Component } from '@angular/core';
import {WorkExperienceItemComponent} from './work-experience-item/work-experience-item.component';

@Component({
  selector: 'app-about-work-experience',
  standalone: true,
  imports: [
    WorkExperienceItemComponent
  ],
  templateUrl: './about-work-experience.component.html',
  styleUrl: './about-work-experience.component.scss'
})
export class AboutWorkExperienceComponent {

}
