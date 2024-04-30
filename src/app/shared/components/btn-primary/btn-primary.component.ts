import { Component, EventEmitter, Output, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ui-btn-primary',
  standalone: true,
  imports: [ TranslateModule ],
  template: `
<button type="submit" (click)="onClick()" [disabled]="disabled()"
  class="w-full px-5 py-2.5 me-2 mb-2 font-medium rounded-lg text-sm text-center
    text-white bg-primary-600 dark:bg-primary-600
    hover:bg-primary-700 dark:hover:bg-primary-700
    focus:ring-primary-300 dark:focus:ring-primary-800
    focus:ring-4 focus:outline-none
    disabled:bg-primary-400">
  {{ title()! | translate }}
</button>
  `,
})
export class BtnPrimaryComponent {
  title = input<string>();
  disabled = input<boolean>();
  @Output() click: EventEmitter<string> = new EventEmitter();

  onClick(): void {
    this.click.emit("");
  }
}
