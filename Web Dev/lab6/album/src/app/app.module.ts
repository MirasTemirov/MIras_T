import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumDetailComponent} from "./components/album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./components/album-photos/album-photos.component";
import {AlbumsService} from "./services/albums.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
