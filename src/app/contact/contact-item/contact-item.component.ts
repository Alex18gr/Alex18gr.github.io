import {Component, input} from '@angular/core';
import {ContactModel} from '../models/contact-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  contact = input.required<ContactModel>();
}
