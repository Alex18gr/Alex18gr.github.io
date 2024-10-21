import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPositionItemComponent } from './work-position-item.component';

describe('WorkPositionItemComponent', () => {
  let component: WorkPositionItemComponent;
  let fixture: ComponentFixture<WorkPositionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPositionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPositionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
