import { PreferencesService } from './../../services/preferences.service';
import { NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/layout/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    NgClass,
    RouterOutlet,
  ],
  template: `
    <div [ngClass]="{'dark': isDark}" class="h-screen text-black bg-white dark:text-white dark:bg-gray-800">
      <app-navbar [(isDark)]="isDark" />
      <main class="">
        <div class="mx-auto max-w-screen-xl">
          <router-outlet />
        </div>
      </main>
    </div>
  `
})
export class LayoutComponent implements OnInit {
  isDark: boolean = true;
  private readonly preferencesSvc = inject(PreferencesService);

  ngOnInit(): void {
    this.isDark = this.preferencesSvc.isDark;
    console.log(this.isDark);

  }

}
