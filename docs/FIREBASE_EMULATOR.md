# Firebase Emulator

## 1. Instalar Firebase Emulator

```bash
firebase init emulators
=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication Emulator, 
Firestore Emulator, Hosting Emulator
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the firestore emulator? 9098
? Which port do you want to use for the hosting emulator? 9097
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? 9096
? Would you like to download the emulators now? Yes

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
```

## 2. Configurar la conexión al emulador

En el archivo ***app.config.ts** modificar la conexión del autenticación, reemplazando ``getAuth()`` por:

``` ts
{
  const auth = getAuth();
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
  return auth;
}
```

En el archivo ***app.config.ts** modificar la conexión del autenticación, reemplazando ``getFirestore()`` por:

``` ts
{
  const firestore = getFirestore();
  connectFirestoreEmulator(firestore, 'http://localhost', 9098);
  return firestore;
}
```

## 3. Arrancar el emulador

Para iniciar el emulador se requiere: que java este instalada y que este activa la opción experimental webframeworks

``` bash
firebase experiments:enable webframeworks
```

Inicial el emulador en la consola tecleando:
``` bash
firebase emulators:start
```
Luego conectarse al sitio ***http://localhost:9096/**.
