import {Component, signal} from '@angular/core';
import {navbarItems} from './navbar-items';
import {NavItem} from './models/nav-item-model';
import {NavbarItemComponent} from './navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarItemComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navItems = signal<NavItem[]>(navbarItems);

}
