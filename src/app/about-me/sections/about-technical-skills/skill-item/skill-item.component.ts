import {Component, input} from '@angular/core';
import {TechnicalSkill} from '../models/technical-skill-model';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  technicalSkill = input.required<TechnicalSkill>();
}
