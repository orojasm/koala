import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/layout/navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, NgClass, RouterOutlet ],
  template: '<router-outlet />'
})
export class AppComponent {
}
