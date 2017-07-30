---
title: Cómo hacer una pantalla de inicio o splash screen.
updated: 2017-07-22 10:49
categories: Android
---

## ¿Qué es y para qué usar un splash screen?

Esta es la vista que aparece muchas veces al inicio de muchas aplicaciones. Generalmente es una imagen estática y tiene como fin evitar que nuestra aplicación se muestre a medio cargar o solicitar permisos esenciales de la aplicación.

### Implementación

Históricamente la implementación de esta pantalla de basó en un activity con un layout asociado a él. El problema de esta implementación es que le quitamos prioridad a la carga del programa. En vez de centrar los recursos en la inicialización de la aplicación, estos se centran primero en cargar nuestra splash screen haciendo lento el inicio, lo cual no queremos. Esto lo aprendí [aquí](https://android.jlelse.eu/right-way-to-create-splash-screen-on-android-e7f1709ba154){:target="_blank"}.

## Código

El código siguiente parte con SplashActivity, la cual tiene defnido como tema SplashTheme. Este tema usa un drawable, spash_background, que se encarga de definir en fondo de este. Cuando SplashActivity inicia, dibuja el fondo, ejecuta lo que necesitemos como peticion de permisos, inicia HomeActivity y finalmente se suicida.

### Manifest

En primera instancia le diremos a nuestra aplicación que inicie con el SplashActivity y definimos HomeActivity.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.domain.project"> //Recordar cambiar esto
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity
            android:name=".SplashActivity"
            android:theme="@style/SplashTheme">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".HomeActivity" />
    </application>
</manifest>
```
El detalle importante acá es el uso del SplashTheme para la SplashActivity. A continuación definiremos estos componentes. No olvidar cambiar el nombre del paquete.

### Activity

Creamos el SplashActivity. Es aquí donde ocurre la magia. En la fase onCreate() puedes hacer petición de permisos y otras cosas que desees previo a llamar el inicio de HomeActivity.

```java
package com.androidjavapoint.splashscreen;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Aquí puedes poner una petición de permisos o lo que necesites previo a iniciar HomeActiviy.
        //Luego iniciamos nuestra home activity
        startActivity(new Intent(SplashActivity.this, HomeActivity.class));
        //Teminamos la SplashActivity
        finish();
    }
}
```

### Theme

En este punto modifiqué un poco el tutorial original y cree un tema especifico para el SplashTheme, para no modificar el fondo de todas las vistas.

Para esto creamos un archivo en la carpeta values con el nombre splash_theme.xml con lo siguiente.

```xml
<resources>
    <style name="SplashTheme" parent="@style/AppTheme">
        <item name="android:windowBackground">@drawable/splash_background</item>
    </style>
</resources>
```

El código anterior hereda del tema original usando `parent="@style/AppTheme`. Luego, define su fondo como un drawable. Un drawable es algo que se dibuja en la pantalla y lo usaremos para definir el fondo de nuestra aplicación.

Para ello en la carpeta drawable creamos un archivo llamado splash_background.xml con el siguiente código.

```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/colorPrimary" />
    <item>
        <bitmap
            android:gravity="center"
            android:src="@mipmap/ic_launcher" />
    </item>
</layer-list>
```
