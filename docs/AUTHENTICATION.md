
# Autenticación de usuarios con firebase.

1. [AuthService](#1-authservice)

## 1. AuthService

Generamos el servicio con el siguiente comando:

```bash
ng g s auth/services/auth
```

Implementamos el servicio, para lo cual observamos los siguiente:

1. Usaremos la implementación de AngularFire (*@angular/fire*)
2. Se definió la variable **userState$** como un *Observable<User | null>* 
3. Se implementaron los métodos para la gestión de la session de usuarios como promesas. 

```typescript
class AuthService {
  userState$;

  // Doc: Create Account
  async register(email: string, password: string): Promise<void> {}

  // Doc: Login email & password
  async login(email: string, password: string): Promise<void> {}

  // Doc: Auth from Google account
  async loginGoogle(): Promise<void> {}

  // Doc: Logout
  async logout(): Promise<void> {}

  // Doc: Send Email to Password Reset
  async sendPasswordResetEmail(email: string): Promise<void> {}

  // Doc: Send Email Verification
  async sendEmailVerification(user: User): Promise<void> {}
}
```

[Ir al inicio]

[Ir al inicio]: <#top>
