import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {navbarItems} from './navbar-items';
import {NavItem} from './models/nav-item-model';
import {NavbarItemComponent} from './navbar-item/navbar-item.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarItemComponent,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  navItems = signal<NavItem[]>(navbarItems);

}
