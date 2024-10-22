import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkExperienceComponent } from './about-work-experience.component';

describe('AboutWorkExperienceComponent', () => {
  let component: AboutWorkExperienceComponent;
  let fixture: ComponentFixture<AboutWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWorkExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
