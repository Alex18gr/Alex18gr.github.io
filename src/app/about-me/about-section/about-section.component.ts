import {Component, input, signal} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AboutSectionContentComponent } from "./about-section-content/about-section-content.component";
import { AboutSectionType } from '../enums/about-section-enum';
import {myTriggerAnimation, triggerShowDetailsAnimation} from '../animations/about-section-animations';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [
    FaIconComponent,
    AboutSectionContentComponent
  ],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  animations: [
    triggerShowDetailsAnimation,
    myTriggerAnimation
  ]
})
export class AboutSectionComponent {
  label = input<string>('');
  icon = input<any>();
  sectionType = input<AboutSectionType>();
  showDetails = signal(false);
  isShown = false;

  toggleShowDetails() {
    this.showDetails.update(prevShow => !prevShow);
    this.isShown = !this.isShown;
  }
}
