import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AboutSectionContentComponent } from "./about-section-content/about-section-content.component";
import { AboutSectionType } from '../enums/about-section-enum';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [
    FaIconComponent,
    AboutSectionContentComponent
],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  label = input<string>('');
  icon = input<any>();
  sectionType = input<AboutSectionType>();
}
