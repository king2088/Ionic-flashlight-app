import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Flashlight } from '@ionic-native/flashlight';

import { MyApp } from './app.component';
import { FlashLight } from '../pages/flashlight/flashlight';

@NgModule({
  declarations: [
    MyApp,
    FlashLight
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FlashLight
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
