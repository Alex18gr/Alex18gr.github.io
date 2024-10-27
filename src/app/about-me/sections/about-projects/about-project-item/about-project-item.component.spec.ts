import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectItemComponent } from './about-project-item.component';

describe('AboutProjectItemComponent', () => {
  let component: AboutProjectItemComponent;
  let fixture: ComponentFixture<AboutProjectItemComponent>;
  const testProject = {
    title: 'IDE Learn',
    descriptionContent: '',
    duration: {
      from: new Date('2023-07-01'),
      to: new Date('2023-07-01')
    },
    tags: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjectItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProjectItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', testProject);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
