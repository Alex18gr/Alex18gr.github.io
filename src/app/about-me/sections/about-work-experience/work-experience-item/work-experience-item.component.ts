import {Component, computed, input} from '@angular/core';
import {WorkExperience} from '../models/work-experience-model';
import {WorkPositionItemComponent} from './work-position-item/work-position-item.component';
import {getDateDifferenceText, getDatePeriod} from '../../../../core/utils/date-utils';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-experience-item',
  standalone: true,
  imports: [
    WorkPositionItemComponent,
    FaIconComponent
  ],
  templateUrl: './work-experience-item.component.html',
  styleUrl: './work-experience-item.component.scss'
})
export class WorkExperienceItemComponent {

  dateIcon = faCalendarDays;

  workExperienceItem = input.required<WorkExperience>();
  differenceText = computed<string>(() => {
    return getDateDifferenceText(
      this.workExperienceItem().duration.from,
      this.workExperienceItem().duration.to ?? new Date()
    );
  });
  datePeriodText = computed<string>(() => {
    return getDatePeriod(
      this.workExperienceItem().duration.from,
      this.workExperienceItem().duration.to
    )
  });

}
