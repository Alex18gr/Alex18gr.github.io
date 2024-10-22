import {Component, input} from '@angular/core';
import {EducationItem} from '../models/education-item-model';
import {educationItems} from '../education-items/education-items';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss'
})
export class EducationItemComponent {
  educationItem = input.required<EducationItem>();
  protected readonly educationItems = educationItems;
}
