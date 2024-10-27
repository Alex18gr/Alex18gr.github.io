import {Component, computed, input} from '@angular/core';
import {AboutProjectModel} from '../models/about-project-model';
import {getDatePeriod} from '../../../../core/utils/date-utils';

@Component({
  selector: 'app-about-project-item',
  standalone: true,
  imports: [],
  templateUrl: './about-project-item.component.html',
  styleUrl: './about-project-item.component.scss'
})
export class AboutProjectItemComponent {
  project = input.required<AboutProjectModel>();
  datePeriodText = computed<string>(() => {
    return getDatePeriod(
      this.project().duration.from,
      this.project().duration.to
    )
  });

}
