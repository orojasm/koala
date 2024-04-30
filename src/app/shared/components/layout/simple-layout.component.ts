import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferencesService } from '@shared/services/preferences.service';

@Component({
  selector: 'app-simple-layout',
  standalone: true,
  imports: [
    NgClass,
    RouterOutlet,
  ],
  template: `
    <div [ngClass]="{'dark': isDark}"
      class="h-screen text-black bg-white dark:text-white dark:bg-gray-800">
      <main>
          <router-outlet />
      </main>
    </div>
  `
})
export class SimpleLayoutComponent {
  isDark: boolean = false;
  private readonly preferencesSvc = inject(PreferencesService);

  ngOnInit(): void {
    this.isDark = this.preferencesSvc.isDark;
    console.log(this.isDark);
  }
}
