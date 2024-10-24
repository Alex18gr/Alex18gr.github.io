import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectItemComponent } from './about-project-item.component';

describe('AboutProjectItemComponent', () => {
  let component: AboutProjectItemComponent;
  let fixture: ComponentFixture<AboutProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjectItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
