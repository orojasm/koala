import { Component, inject, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PreferencesService } from '@shared/services/preferences.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isDark = model<boolean>(false);
  private readonly preferencesSvc = inject(PreferencesService);

  style = {
    itemActive: `
      block py-2 pr-4 pl-3 rounded lg:p-0
      text-white bg-primary-700
      lg:text-primary-700 lg:bg-transparent
      dark:text-white
    `,
    item: `
      block py-2 pr-4 pl-3 border-b
      lg:p-0 lg:border-0
      text-gray-700
      border-gray-100
      hover:bg-gray-50
      lg:hover:text-primary-700 lg:hover:bg-transparent
      dark:text-gray-400
      dark:border-gray-700
      dark:hover:text-white dark:hover:bg-gray-700
      lg:dark:hover:text-white lg:dark:hover:bg-transparent
    `,
  }

  toggleDark() {
    this.isDark.update((value) => !value);
    this.preferencesSvc.isDark = this.isDark();
  }

}
