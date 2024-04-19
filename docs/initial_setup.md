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
