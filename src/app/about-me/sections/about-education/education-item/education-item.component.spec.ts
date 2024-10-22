import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationItemComponent } from './education-item.component';
import {EducationItem} from '../models/education-item-model';

describe('EducationItemComponent', () => {
  let component: EducationItemComponent;
  let fixture: ComponentFixture<EducationItemComponent>;
  const testEducationItem: EducationItem = {
    institution: {
      name: 'University of Macedonia',
      department: 'Applied Informatics',
      location: 'Thessaloniki, Greece'
    },
    title: 'BSc in Applied Informatics',
    duration: {
      from: {
        year: '2015',
        month: 'September'
      },
      to: {
        year: '2019',
        month: 'June'
      },
      inProgress: false
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('educationItem', testEducationItem);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
