import {Component, signal} from '@angular/core';
import {contactDetails} from './contact-details';
import {ContactItemComponent} from './contact-item/contact-item.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactItemComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = signal(contactDetails);
}
