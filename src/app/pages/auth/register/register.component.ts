import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass,
    ErrorMessageComponent,
    BtnPrimaryComponent,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  private readonly authSvc = inject(AuthService);
  user$!: Observable<any>;
  private readonly emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
    this.initForm();
    this.user$ = this.authSvc.userState$;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern(this.emailPattern) ]],
      password: ['', [ Validators.required, Validators.minLength(8) ]],
      confirmPassword: ['', [ Validators.required, Validators.minLength(8) ]],
    });
  }

  onSubmit(): void {
    const { email, password } = this.form.value;
    this.authSvc.register(email, password)
  }

  hasError(field: string): boolean {
    const fieldName = this.form.get(field);
    return !!fieldName?.invalid && fieldName.touched;
  }

  loginGoogle(): void {
    this.authSvc.loginGoogle();
  }

  logout(): void {
    this.authSvc.logout();
  }

}
