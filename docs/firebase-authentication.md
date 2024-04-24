# Instalación de firebase.

## 1. Crear una aplicación en Firebase

En la [consola de Firebase](https://console.firebase.google.com/?hl=es) presionamos el botón **+Agregar un Proyecto**, en la primera ventana deshabilitamos las analíticas. <br>

Una vez creado el proyecto, nos aparece la ventana **Comienza por agregar Firebase a tu app**, agregamos la app web en el botón **</>**:
En la ventana **Agrega Firebase a tu aplicación web** debemos realizar la siguientes pasos:

1. Registrar app: diligencie el sobrenombre de la app, y seleccione **Además, configura Firebase Hosting para esta app**

2. Agrega el SDK de Firebase :
    * ``npm install firebase``
    * Ademas nos presenta un archivo js con los parámetros para inicializar Firebase en nuestro proyecto *(este archivo no lo usaremos, en sus lugar usaremos la configuración que nos proporciona Angular Firebase, [ver mas adelante](#3-instala-angularfire) )*.
``` js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI16BU9w_-FBbaiRNSIBOy5-YX1LEJ7Hw",
  authDomain: "koala-e153d.firebaseapp.com",
  projectId: "koala-e153d",
  storageBucket: "koala-e153d.appspot.com",
  messagingSenderId: "985816253475",
  appId: "1:985816253475:web:f629ae9195ec358acf5d96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

3. Instala Firebase CLI 
``` bash
npm install -g firebase-tools
```

4. Para realiza la implementación en Firebase Hosting utilizaremos los siguientes comandos:
  * Acceder a Google ``firebase login``
  * Inicia el proyecto ``firebase init``
  * Despliega la aplicación web ``firebase deploy``

## 2. Activar productos de Firebase en nuestro proyecto
* En la ventana principal del proyecto, en el apartado **Elige un producto para agregarlo a tu app** presionamos en **Authentication**, donde agregamos los proveedores: **correo electrónico/contraseña** y **Google**.
* Nuevamente, En la ventana principal del proyecto, en el apartado **Elige un producto para agregarlo a tu app** presionamos en **Cloud Firestore**, Creamos la base de datos en Firestore.

## 3. Instala AngularFire

El paquete AngularFire se encuentra en git (https://github.com/angular/angularfire), y según su documentación se debe instalar el schematic:
``` bash
ng add @angular/fire
```
Durante la instalación nos preguntan las facilidades que vamos a configurar, a lo cual contestamos:
``` bash
What features would you like to setup? 
 ◉ ng deploy -- hosting
 ◉ Authentication
 ◯ Google Analytics
 ◯ App Check
 ◉ Firestore
 ◯ Realtime Database
 ◯ Cloud Functions (callable)
 ```
Luego nos pregunta: la cuenta de google, el proyecto, el hosting site y la base de datos. En mi caso la salida de la instalación es la siguiente:
``` bash
ng add @angular/fire
Skipping installation: Package already installed
UPDATE package.json (1300 bytes)
✔ Packages installed successfully.
? What features would you like to setup? ng deploy -- hosting, Authentication, Firestore
Using firebase-tools version 13.5.2
? Which Firebase account would you like to use? orojas.molina@gmail.com
✔ Preparing the list of your Firebase projects
? Please select a project: koala
? Please select a hosting site: [CREATE NEW SITE]
? Please provide an unique, URL-friendly id for the site (<id>.web.app): koala-co
✔ Preparing the list of your Firebase WEB apps
? Please select an app: koala
✔ Downloading configuration data of your Firebase WEB app
CREATE .firebaserc (176 bytes)
UPDATE .gitignore (649 bytes)
UPDATE angular.json (3579 bytes)
UPDATE firebase.json (110 bytes)
UPDATE src/app/app.config.ts (1557 bytes)
```
Esta instalación nos indica que nuestro site es ***https://koala-co.web.app*** 

Como resultado de este schematics se actualiza el archivo **app.config.ts** y una vez realizado un procesos de formateo, el código, queda asi:

``` ts

...

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '@env/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase))
    ),
    importProvidersFrom(
      provideAuth(() => getAuth())
    ),
    importProvidersFrom(
      provideFirestore(() => getFirestore())
    ),
  ]
};
```
Los parámetros para inicializar Firebase en nuestro proyecto los movimos al archivo **environment.development.ts**
``` ts
export const environment = {
  apiUrl: '',
  production: false,
  firebase: {
    projectId: "koala-e153d",
    appId: "1:985816253475:web:f629ae9195ec358acf5d96",
    storageBucket: "koala-e153d.appspot.com",
    apiKey: "AIzaSyDI16BU9w_-FBbaiRNSIBOy5-YX1LEJ7Hw",
    authDomain: "koala-e153d.firebaseapp.com",
    messagingSenderId: "985816253475"
  }
};
```

# Auténtica y administrar usuarios con firebase.
