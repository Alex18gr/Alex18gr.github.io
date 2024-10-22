import {Component, inject, OnInit, signal} from '@angular/core';
import { ButtonComponent } from "../core/UI/button/button.component";
import { Meta } from '@angular/platform-browser';
import {CvService} from '../services/cv.service';
import {homeTechnicalSkills} from '../about-me/sections/about-technical-skills/technical-skills/technical-skills';
import {SkillItemComponent} from '../about-me/sections/about-technical-skills/skill-item/skill-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, SkillItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private metaService = inject(Meta);
  private cvService = inject(CvService);

  skills = signal(homeTechnicalSkills);

  ngOnInit(): void {
    // set meta data for SEO...
    this.metaService.updateTag({
      name: 'description',
      content: 'Alexandros Tsichouridis personal page | Senior Software Engineer - Full stack web developer'
    });
  }

  downloadCV() {
    this.cvService.downloadCV();
  }
}
