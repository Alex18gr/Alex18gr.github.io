import { Component, signal } from '@angular/core';
import { AboutSectionComponent } from "./about-section/about-section.component";
import { aboutSections } from './about-sections';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AboutSectionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutSections = signal(aboutSections);
}
