import { Component } from '@angular/core';
import { AboutSectionComponent } from "./about-section/about-section.component";
import { faGraduationCap, faMessage, faBriefcase, faScrewdriverWrench, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AboutSectionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  faGraduationCap = faGraduationCap;
  faMessage = faMessage;
  faBriefcase = faBriefcase;
  faScrewdriverWrench = faScrewdriverWrench;
  faList = faList;
}
