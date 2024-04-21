import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, NgClass, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'koala';
  isDark: boolean = true;
}
