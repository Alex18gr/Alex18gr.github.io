import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillItemComponent } from './skill-item.component';
import {TechnicalSkill} from '../models/technical-skill-model';

describe('SkillItemComponent', () => {
  let component: SkillItemComponent;
  let fixture: ComponentFixture<SkillItemComponent>;
  const testTechnicalSkill: TechnicalSkill = { name: 'Java', knowledgeLevel: 1 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('technicalSkill', testTechnicalSkill);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
