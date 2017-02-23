import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Angular2TokenService } from 'angular2-token';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule
    ],
    declarations: [ AppComponent ],
    providers:    [ Angular2TokenService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
