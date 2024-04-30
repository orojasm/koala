import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { User } from 'firebase/auth';
import { tap } from 'rxjs';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [
    JsonPipe,
    TranslateModule
  ],
  templateUrl: './email-verification.component.html'
})
export class EmailVerificationComponent {
  user: User | null = null;
  email: string | null | undefined;
  private readonly authSrv = inject(AuthService);

  constructor() {
    this.authSrv.userState$
      .pipe(
        tap((user) => {
          this.user = user;
          this.email = user?.email;
        }),
        // tap(() => this.authSrv.logout()),
      )
      .subscribe();
  }

  onResendEmail(): void {
    if (this.user) {
      this.authSrv.sendEmailVerification(this.user);
      this.authSrv.logout();
    }
  }

}
