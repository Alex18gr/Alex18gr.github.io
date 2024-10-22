import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionContentComponent } from './about-section-content.component';

describe('AboutSectionContentComponent', () => {
  let component: AboutSectionContentComponent;
  let fixture: ComponentFixture<AboutSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
