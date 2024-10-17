import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../core/UI/button/button.component";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private metaService = inject(Meta);

  ngOnInit(): void {
    // set meta data for SEO...
    this.metaService.updateTag({
      name: 'description',
      content: 'Alexandros Tsichouridis personal page | Senior Software Engineer - Full stack web developer'
    });
  }

}
