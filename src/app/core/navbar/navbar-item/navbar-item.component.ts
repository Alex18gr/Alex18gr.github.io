import {Component, input} from '@angular/core';
import {NavItem} from '../models/nav-item-model';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {

  navItem = input<NavItem>();

}
