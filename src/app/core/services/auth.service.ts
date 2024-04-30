import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  User,
} from "@angular/fire/auth";

interface ErrorResponse {
  code: string,
  message: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly googleProvider = new GoogleAuthProvider();

  constructor() { }

  get userState$() {
    return authState(this.auth);
  }

  // Doc: Create Account
  async register(email: string, password: string): Promise<void> {
    try {
      // Create Account
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      // Send Email
      await this.sendEmailVerification(user);
      // Redirect to Welcome Message
      await this.router.navigate(['/auth/welcome']);
    } catch (error) {
      const { code, message } = error as ErrorResponse;
      console.log(`Code: ${code}`);
      console.log(`Message: ${message}`);
    }
  }

  // Doc: Login email & password
  async login(email: string, password: string): Promise<void> {
    try {
      // Sign In
      const { user } = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      // Check if user is already verify and Redirect
      (user.emailVerified)
        ? await this.router.navigate(['/'])
        : await this.router.navigate(['/auth/email-verification']);
    } catch (error) {
      const { code, message } = error as ErrorResponse;
      console.log(`Code: ${code}`);
      console.log(`Message: ${message}`);
    }
  }

  // Doc: Auth from Google account
  async loginGoogle(): Promise<void> {
    try {
      await signInWithRedirect(this.auth, this.googleProvider);
    } catch (error) {
      console.log('Google login', error);
    }
  }

  // Doc: Logout
  async logout(): Promise<void> {
    try {
      await this.auth.signOut();
      console.log('auth.signOut');
      await this.router.navigate([''])
    } catch (error) {
      console.log(error);
    }
  }

  // Doc: Send Email to Password Reset
  async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      console.log(error);
    }
  }

  // Doc: Send Email Verification
  async sendEmailVerification(user: User): Promise<void> {
    try {
      await sendEmailVerification(user);
    } catch (error) {
      console.log(error);
    }
  }

}
