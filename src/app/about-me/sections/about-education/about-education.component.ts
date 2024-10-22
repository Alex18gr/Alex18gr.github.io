import {Component, signal} from '@angular/core';
import {EducationItemComponent} from './education-item/education-item.component';
import {educationItems} from './education-items/education-items';

@Component({
  selector: 'app-about-education',
  standalone: true,
  imports: [
    EducationItemComponent
  ],
  templateUrl: './about-education.component.html',
  styleUrl: './about-education.component.scss'
})
export class AboutEducationComponent {
  educationItems = signal(educationItems);
}
