import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenComponent } from './kitten/kitten.component';
import { SingleKittenComponent } from './single-kitten/single-kitten.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    KittenComponent,
    SingleKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
