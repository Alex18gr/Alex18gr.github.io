import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {navbarItems} from './navbar-items';
import {NavItem} from './models/nav-item-model';
import {NavbarItemComponent} from './navbar-item/navbar-item.component';
import {RouterLink} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {triggerShowHeightAnimation} from '../animations/about-section-animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarItemComponent,
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    triggerShowHeightAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  mobileMenuIcon = faBars;
  showMobileMenu = signal(false);

  navItems = signal<NavItem[]>(navbarItems);

  navItemClicked() {
    this.hideMenu();
  }

  toggleMenu() {
    this.showMobileMenu.update((prevShowValue) => {
      return !prevShowValue;
    });
  }

  hideMenu() {
    this.showMobileMenu.update((prevShowValue) => false);
  }
}
