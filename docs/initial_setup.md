
## Crear el proyecto
Comience creando un nuevo proyecto Angular 17. Utilizando Angular CLI. durante la instalación seleccione SCSS como formato de hoja de estilo.

``` bash
❯ ng new koala
❯ cd koala
```

## Configuración de git y github

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

## Instalar Tailwind CSS
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

## Configuración de angular

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
