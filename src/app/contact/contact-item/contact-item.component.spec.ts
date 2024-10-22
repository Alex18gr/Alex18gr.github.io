import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemComponent } from './contact-item.component';
import {ContactModel} from '../models/contact-model';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

describe('ContactItemComponent', () => {
  let component: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;
  const contactModel: ContactModel = {
    title: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/alexandros-tsichouridis-80771415a/',
    description: 'in/alexandros-tsichouridis-80771415a/'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contact', contactModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
