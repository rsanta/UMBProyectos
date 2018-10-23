import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsultarpPage } from '../pages/consultarp/consultarp';
import { EditarpPage } from '../pages/editarp/editarp';
import { DeletepPage } from '../pages/deletep/deletep';
import { ParticipantespPage } from '../pages/participantesp/participantesp';
import { ListaparticipantespPage } from '../pages/listaparticipantesp/listaparticipantesp';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultarpPage,
    EditarpPage,
    DeletepPage,
    ParticipantespPage,
    ListaparticipantespPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultarpPage,
    EditarpPage,
    DeletepPage,
    ParticipantespPage,
    ListaparticipantespPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
