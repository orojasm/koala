
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
