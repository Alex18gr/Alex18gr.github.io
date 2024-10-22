import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechnicalSkillsComponent } from './about-technical-skills.component';

describe('AboutTechnicalSkillsComponent', () => {
  let component: AboutTechnicalSkillsComponent;
  let fixture: ComponentFixture<AboutTechnicalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTechnicalSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
