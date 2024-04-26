# Procedimientos y comandos de git 

## 1. Configuración de git y github

Cambiar el mensaje del commit inicial para que cumpla con las reglas de ***Conventional Commits***
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

## 2. Utilización de branch en git
1. Lista todas las ramas
``` bash
❯ git branch --list --all -v
```

2. Definir la rama feature/new_feature
``` bash
❯ git branch --list --all
❯ git checkout develop
❯ git branch feature/new_feature
❯ git checkout feature/new_feature

o

❯ git checkout develop
❯ git checkout -b feature/new_feature
```

3. Adicionar archivos y hacer un commit
``` bash
❯ git add .
❯ git status
❯ git commit -m "«new feature»"
```

4. Adicionar un archivo al commit actual
``` bash
❯ git add «file»
❯ git status
❯ git commit --amend --no-edit
```

5. Subir la rama feature/new_feature
``` bash
❯ git push origin feature/new_feature
```

6. Hacer el pull request


7. Sincroniza la rama develop del remoto en el local
``` bash
❯ git checkout develop
❯ git pull origin develop
```

* Otros comandos
  * ver el log de git
``` bash
❯ git log --graph --all --since=2024-01-01 
```
* 
  * Renombrar una rama
``` bash
❯ git branch -m feature/initial feature/initial_setup
```


