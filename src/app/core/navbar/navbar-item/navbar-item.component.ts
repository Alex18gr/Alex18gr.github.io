import {Component, input, output} from '@angular/core';
import {NavItem} from '../models/nav-item-model';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    RouterLinkActive
  ],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {

  navItem = input<NavItem>();
  itemClicked = output<void>();



}
