import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    ErrorMessageComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  email!: FormControl;
  isEmailSent = false;
  private readonly authSvc = inject(AuthService);
    private readonly router = inject(Router);
  private readonly emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
    this.initEmailField();
  }

  hasError(field: string): boolean {
    return false;
  }

  async onSubmit(event: Event): Promise<void> {
    event?.stopPropagation();
    try {
      this.isEmailSent = true;
      await this.authSvc.sendPasswordResetEmail(this.email.value);
    } catch (error) {
      console.log(`Reset password ${error}`);
      this.isEmailSent = false;
    }
  }

  gotoLogin() {
    this.router.navigate(['/auth/login']);
  }

  private initEmailField(): void {
    this.email = new FormControl(
      '',
      [Validators.required, Validators.pattern(this.emailPattern)],
    );
  }

}


// import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
// import { Component, OnInit, inject } from '@angular/core';
// import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterLink } from '@angular/router';

// @Component({
//   imports: [
//     RouterLink,
//     ReactiveFormsModule
//   ],
// })
