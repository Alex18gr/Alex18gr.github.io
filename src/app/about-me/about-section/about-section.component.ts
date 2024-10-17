import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  label = input<string>('');
  icon = input<any>();
}
