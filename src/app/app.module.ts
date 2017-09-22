import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { TranslatePage} from '../pages/translate/translate';
import { RegisterPage } from '../pages/register/register';
import { AlgebraPage } from '../pages/algebra/algebra';
import { AssociativePage } from '../pages/associative/associative';
import { AbsolutePage } from '../pages/absolute/absolute';
import { AdditionPage } from '../pages/addition/addition';
import { PermutationsPage } from '../pages/permutations/permutations';
import { CombinationsPage } from '../pages/combinations/combinations';
import { GooglemapsPage } from '../pages/googlemaps/googlemaps';
import { AddPage } from '../pages/add/add';
import { MapsPage } from '../pages/maps/maps';
import {PlacesServices } from '../pages/services/services';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    TranslatePage,
    RegisterPage,
    AlgebraPage,
    AssociativePage,
    AbsolutePage,
    AdditionPage,
    PermutationsPage,
    CombinationsPage,
    GooglemapsPage,
    AddPage,
    MapsPage
    
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
    SettingsPage,
    TranslatePage,
    RegisterPage,
    AlgebraPage,
    AssociativePage,
    AbsolutePage,
    AdditionPage,
    PermutationsPage,
    CombinationsPage,
    GooglemapsPage,
    AddPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},PlacesServices
  ]
})
export class AppModule {
  
}
