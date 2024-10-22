import {Component, input} from '@angular/core';
import {ContactModel} from '../models/contact-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';

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
  copyIcon = faCopy;

  copyLinkToClipboard() {
    window.navigator.clipboard.writeText(this.contact().url).then(() => {
      alert(this.contact().title + ' url copied!');
    });
  }
}
