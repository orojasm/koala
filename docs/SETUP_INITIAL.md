# Configuración inicial del proyecto

## Contenido

1. [Creación del proyecto](#1-crear-el-proyecto)
2. [Configuración de Git y github](#2-configuración-de-git-y-github)
3. [Inhalación de tailwindCSS](#3-instalar-tailwind-css)
4. [Configuración de Angular](#4-configuración-de-angular)
5. [Componentes Home y Navbar](#5-generar-los-componentes-home-y-navbar)
6. [Modo Oscuro](#6-implementación-del-modo-oscuro)
7. [Internacionalización](#7-internacionalización)

Otros documentos:

[Procedimientos y comandos de git](/docs/git.md)

## 1. Crear el proyecto
Comience creando un nuevo proyecto Angular 17. Utilizando Angular CLI. durante la instalación seleccione SCSS como formato de hoja de estilo.

```bash
❯ ng new koala
❯ cd koala
```

[Ir al inicio]

## 2. Configuración de git y github

En Git
Cambiar el mensaje ***initial commit***, según las reglas de ***Conventional Commits***

```bash
❯ git commit --amend -m "chore(config): :tada: initial commit"
```

Definir el repositorio 'koala' en github y Conectar git a github

```bash
❯ git remote add origin git@github.com:orojasm/koala.git
❯ git push -u origin main
```

Definir la rama release y sincronizarla con github

```bash
❯ git branch release
❯ git checkout release
❯ git push -u origin release
```

Definir la rama develop y sincronizarla con github

```bash
❯ git branch develop
❯ git checkout develop
❯ git push -u origin develop
```

Definir la rama feature/initial_setup

```bash
❯ git branch feature/initial_setup
❯ git checkout feature/initial_setup
```

[Ir al inicio]

## 3. Instalar TailwindCSS
Instale tailwind a través de npm y luego ejecute el comando **init*** para generar el archivo tailwind.config.js

```bash
❯ npm install -D tailwindcss postcss autoprefixer
❯ npx tailwindcss init
```

Agregue las rutas a todos sus archivos en su archivo tailwind.config.js.

```javascript
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

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ejecute su proceso de compilación de angula con ng serve.

```bash
❯ ng serve
```

Comienza a usar Tailwind en tu proyecto, modifique el archivo ***app.component.html***, con el siguiente contenido.

```html
<h1 class="text-3xl font-bold underline">Koala</h1>

<router-outlet />
```

[Ir al inicio]

## 4. Configuración de angular

### Generar los archivos de entorno.

```bash
❯ ng g environments
```

### Ignorar archivos de perfiles en git

```config
# profiling files
chrome-profiler-events*.json
```

### Configurar paths de la aplicación en el archivo ***tsconfig.json***

```typescript
    "baseUrl": "./",
    "paths": {
      "@app/*": [ "src/app/*" ],
      "@api/*": [ "src/app/api/*" ],
      "@core/*": [ "src/app/core/*" ],
      "@pages/*": [ "src/app/pages/*" ],
      "@shared/*": [ "src/app/shared/*" ],
      "@auth/*": [ "src/app/pages/auth/*" ],
      "@env/*": [ "src/environments/*" ],
    },
```

### Configurar el puerto de la aplicación en el archivo ***angular.json***

```typescript
        "serve": {
          "options": {
            "port": 4200
          },
```

[Ir al inicio]

## 5. Generar los componentes home y navbar

Generar los componentes

```bash
❯ ng g c pages/home
❯ ng g c shared/components/navbar
```

Adicionar la ruta ***/home***

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
```

Modificar el archivo ***home.component.ts*** para que el ***export*** tenga ***default***.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent { }
```

Para el componente Navbar utilizamos la platilla Header de [Flowbite](https://flowbite.com/blocks/marketing/header/), se debe modificar el archivo tailwind.config.js para configurar darkMode y colors y fontFamily

```javascript
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

[Ir al inicio]

## 6. Implementación del modo oscuro.

Ya habíamos configurado darkMode en tailwind (archivo tailwind.json), utilizando la clase ``dark``

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  
  ...

}
```

Debemos definir la variable ``isDark: boolean = true;`` en ***app.component.ts*** y pasarla como parámetro al Navbar.

```html
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

```html
  ...

  <!-- Doc: BTN Dark Mode -->
  <button (click)="toggleDark()" type="button" >
    <span class="sr-only">Dark Mode</span>
    @if (isDark()) {
      <svg xmlns="http://www.w3.org/2000/svg" 
        class="w-6 h-6 text-gray-800 dark:text-white" 
        aria-hidden="true" 
        width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" 
          stroke-linejoin="round" stroke-width="1.6"
          d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m1............" />
      </svg>
    } @else {
      <svg xmlns="http://www.w3.org/2000/svg" 
        class="w-5 h-5 text-gray-500 dark:text-white" 
        aria-hidden="true" 
        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
          d="M11.675 2.015a.998.998 0 0 0-.403.011C6............" 
          clip-rule="evenodd" />
      </svg>
    }
  </button>

  ...
```

[Ir al inicio]

## 7. Internacionalización

La internacionalización , a veces denominada i18n, es el proceso de diseñar y preparar su proyecto para su uso en diferentes lugares del mundo. La localización es el proceso de crear versiones de su proyecto para diferentes configuraciones regionales. El proceso de localización incluye las siguientes acciones.

* Extraer texto para traducir a diferentes idiomas
* Formatear datos para una ubicación específica

Una localidad identifica una región en la que la gente habla un idioma o variante lingüística particular. Las posibles regiones incluyen países y regiones geográficas. Una configuración regional determina el formato y el análisis de los siguientes detalles.

* Unidades de medida que incluyen fecha y hora, números y monedas.
* Nombres traducidos, incluidas zonas horarias, idiomas y países.

### 7.1. Instalación de Localización y traducción.

Para aprovechar las funciones de localización de Angular, utilice la CLI de Angular para agregar el paquete **@angular/localize** a su proyecto.

Para agregar el paquete **@angular/localize**, use el siguiente comando para actualizar el archivo package.json y los archivos de configuración de TypeScript en su proyecto.

```bash
❯ ng add @angular/localize
```

Instalaremos los paquetes de traducción y cargo de los archivos de traducción: 

```bash
❯ npm install @ngx-translate/core
❯ npm install @ngx-translate/http-loader
```

### 7.2. Configuración del modulo de traducción.

Adicionar ``TranslateModule.forRoot( translateModuleConfig )`` al archivo ***app.config.ts***

```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient]
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom( TranslateModule.forRoot( translateModuleConfig ) ),
  ]
};
```

### 7.3. Preparar los componentes para la traducción.

Para preparar su proyecto para la traducción, complete las siguientes acciones.

* Adicione el TranslateModule al archivo component.ts

```typescript
import { Component, model } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDark = model<boolean>(false);

  toggleDark() {
    this.isDark.update((value) => !value);
  }
}
```

* Identifique los textos a traducir

```html
  <ul [class]="style.menuOptionsList">
    <li><a routerLink="/home" [class]="style.itemActive">
      Home
    </a></li>
    <li><a routerLink="/features" [class]="style.item">
      Features
    </a></li>
    <li><a routerLink="/about" [class]="style.item">
      About
    </a></li>
  </ul>
```

En este template html identificamos los textos Home, Features y About, yo utilizare el siguiente estándar para las etiquetas de los textos

```json
{
  "component_type_label": "text"
}
```

* Donde:
  * component: Es el nombre del componente que contiene el text a traducir
  * type *(optional)*: Tipo es una etiqueta que corresponde al tipo de elemento que contiene texto a traducir en la plantilla (p.e. title, desc, lnk, btn, input etc,)
  * label: Etiqueta asociada el texto a traducir
  * text: texto traducido

* Adicione en archivo assets/i18n/en.json con las tradiciones en ingles, por ejemplo

```json
{
  "core_language_english": "English",
  "core_language_spanish": "Spanish",
  "navbar_brand": "My Company",
  "navbar_lnk_home": "Home",
  "navbar_lnk_features": "Features",
  "navbar_lnk_about": "About",
  "navbar_btn_login": "Log in",
}
```

* Utilice el pipe translate para marcar los mensajes a traducir

```html
  <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    <li><a routerLink="/home" [class]="style.itemActive">
      {{ "navbar_lnk_home" | translate }}
    </a></li>
    <li><a routerLink="/features" [class]="style.item">
      {{ "navbar_lnk_features" | translate }}
    </a></li>
    <li><a routerLink="/about" [class]="style.item">
      {{ "navbar_lnk_about" | translate }}
    </a></li>
  </ul>
```

* Adiciones los archivos de traducciones que necesite, por ejemplo para español el archivo  ***assets/i18n/es.json***

```json
{
  "language_english": "Ingles",
  "language_spanish": "Español",
  "navbar_brand": "My Company",
  "navbar_lnk_home": "Inicio",
  "navbar_lnk_features": "Facilidades",
  "navbar_lnk_about": "Iniciar sesión",
  "navbar_btn_login": "Empezar ahora",
}
```

[Ir al inicio]


[Ir al inicio]: <#top>
