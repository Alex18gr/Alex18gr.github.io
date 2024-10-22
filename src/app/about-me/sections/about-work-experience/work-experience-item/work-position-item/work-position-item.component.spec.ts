import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPositionItemComponent } from './work-position-item.component';
import {WorkPosition} from '../../models/work-experience-model';

describe('WorkPositionItemComponent', () => {
  let component: WorkPositionItemComponent;
  let fixture: ComponentFixture<WorkPositionItemComponent>;
  const testWorkPosition: WorkPosition = {
    companyName: 'Comp',
    duration: {
      from: new Date('2023-07-01'),
    },
    positionTitle: 'Senior Software Engineer',
    positionType: 'Full Time',
    location: 'Thessaloniki, Central Macedonia, Greece'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPositionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPositionItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('position', testWorkPosition);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
