import {Component, computed, input} from '@angular/core';
import {WorkPosition} from '../../models/work-experience-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {getDateDifferenceText, getDatePeriod} from '../../../../../core/utils/date-utils';

@Component({
  selector: 'app-work-position-item',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './work-position-item.component.html',
  styleUrl: './work-position-item.component.scss'
})
export class WorkPositionItemComponent {
  protected readonly dateIcon = faCalendarDays;
  position = input.required<WorkPosition>();
  showCompany = input(false);
  differenceText = computed<string>(() => {
    return getDateDifferenceText(
      this.position().duration.from,
      this.position().duration.to ?? new Date()
    );
  });
  datePeriodText = computed<string>(() => {
    return getDatePeriod(
      this.position().duration.from,
      this.position().duration.to
    )
  });
}
