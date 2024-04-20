# Configuración inicial del proyecto

## 1. Crear el proyecto
Comience creando un nuevo proyecto Angular 17. Utilizando Angular CLI. durante la instalación seleccione SCSS como formato de hoja de estilo.

``` bash
❯ ng new koala
❯ cd koala
```

## 2. Configuración de git y github

En Git
Cambiar el mensaje ***initial commit***, según las reglas de ***Conventional Commits***
``` bash
❯ git commit --amend -m "chore(config): :tada: initial commit"
```

Definir el repositorio 'koala' en github y Conectar git a github
``` bash
❯ git remote add origin git@github.com:orojasm/koala.git
❯ git push -u origin main
```

Definir la rama release y sincronizarla con github
``` bash
❯ git branch release
❯ git checkout release
❯ git push -u origin release
```

Definir la rama develop y sincronizarla con github
``` bash
❯ git branch develop
❯ git checkout develop
❯ git push -u origin develop
```

Definir la rama feature/initial_setup
``` bash
❯ git branch feature/initial_setup
❯ git checkout feature/initial_setup
```

## 3. Instalar Tailwind CSS
Instale tailwind a través de npm y luego ejecute el comando **init*** para generar el archivo tailwind.config.js
``` bash
❯ npm install -D tailwindcss postcss autoprefixer
❯ npx tailwindcss init
```

Agregue las rutas a todos sus archivos en su archivo tailwind.config.js.
``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Añadir las directivas Tailwind al archivo ***./src/styles.css***.

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ejecute su proceso de compilación de angula con ng serve.
``` bash
❯ ng serve
```

Comienza a usar Tailwind en tu proyecto, modifique el archivo ***app.component.html***, con el siguiente contenido.
``` html
<h1 class="text-3xl font-bold underline">Koala</h1>

<router-outlet />
```

## 4. Configuración de angular

### Generar los archivos de entorno.

``` bash
❯ ng g environments
```

### Ignorar archivos de perfiles en git

``` git
# profiling files
chrome-profiler-events*.json
```

### Configurar paths de la aplicación en el archivo ***tsconfig.json***

``` ts
    "baseUrl": "./",
    "paths": {
      "@api/*": [ "src/app/api/*" ],
      "@app/*": [ "src/app/*" ],
      "@auth/*": [ "src/app/auth/*" ],
      "@env/*": [ "src/environments/*" ],
      "@shared/*": [ "src/app/shared/*" ],
      "@pages/*": [ "src/app/pages/*" ],
      "@components/*": [ "src/app/components/*" ],
    },
```

### Configurar el puerto de la aplicación en el archivo ***angular.json***

``` ts
        "serve": {
          "options": {
            "port": 4200
          },
```

## 5. Generar los componentes home y navbar

Generar los componentes

``` bash
❯ ng g c pages/home
❯ ng g c shared/components/navbar
```

Adicionar la ruta ***/home***

``` ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
```

Modificar el archivo ***home.component.ts*** para que el ***export*** tenga ***default***.

``` ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
```

Para el componente Navbar utilizamos la platilla Header de [Flowbite](https://flowbite.com/blocks/marketing/header/), se debe modificar el archivo tailwind.config.js para configurar darkMode y colors y fontFamily

``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe",
          "300":"#93c5fd","400":"#60a5fa","500":"#3b82f6",
          "600":"#2563eb","700":"#1d4ed8","800":"#1e40af",
          "900":"#1e3a8a","950":"#172554"
        }
      }
    },
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [],
}
```

## 6. Implementación del modo oscuro.

Ya habíamos configurado darkMode en tailwind (archivo tailwind.json), utilizando la clase ``dark``

``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  
  ...

}
```

Debemos definir la variable ``isDark: boolean = true;`` en ***app.component.ts*** y pasarla como parámetro al Navbar.

``` html
<div [ngClass]="{'dark': isDark}" class="h-screen text-black bg-white dark:text-white dark:bg-gray-800" >
  <app-navbar [(isDark)]="isDark" />
  <main class="px-4 lg:px-6">
    <div class="mx-auto max-w-screen-xl">
      <router-outlet />
    </div>
  </main>
</div>
```

En el archivo ***navbar.component.ts*** recibimos el parámetro como un signal modal (two binding ) ``isDark = model<boolean>(false);`` y en la plantilla lo usamos para manejar el estado de Dark Mode.

``` html
  ...

  <!-- Doc: BTN Dark Mode -->
  <button (click)="toggleDark()" type="button" 
    data-dropdown-toggle="notification-dropdown" 
    class="p-2 mr-1 rounded-lg ... ">
    <span class="sr-only">Dark Mode</span>
    @if (isDark()) {
      <svg class="w-6 h-6 text-gray-800 dark:text-white" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" 
          stroke-linejoin="round" stroke-width="1.6"
          d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m1............" />
      </svg>
    } @else {
      <svg class="w-5 h-5 text-gray-500 dark:text-white" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
          d="M11.675 2.015a.998.998 0 0 0-.403.011C6............" 
          clip-rule="evenodd" />
      </svg>
    }
  </button>

  ...
```
