import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceItemComponent } from './work-experience-item.component';
import {WorkExperience} from '../models/work-experience-model';

describe('WorkExperienceItemComponent', () => {
  let component: WorkExperienceItemComponent;
  let fixture: ComponentFixture<WorkExperienceItemComponent>;
  const experienceTest: WorkExperience = {
    key: 'key_1',
    company: 'Comp',
    duration: {
      from: new Date('2024-07-01'),
    },
    positions: [
      {
        companyName: 'Comp',
        duration: {
          from: new Date('2023-07-01'),
        },
        positionTitle: 'Senior Software Engineer',
        positionType: 'Full Time',
        location: 'Thessaloniki, Central Macedonia, Greece'
      },
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceItemComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('workExperienceItem', experienceTest);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
