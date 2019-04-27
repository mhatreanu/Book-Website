import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookModule } from './book/book.module';
import { customerModule } from './customer/customer.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routes';
import {ResourceNotFoundComponent} from './notFound.component';
@NgModule({
  declarations:[
    AppComponent,
    WelcomeComponent,
    ResourceNotFoundComponent
  ],

  providers:[

  ],
  bootstrap:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    BookModule,
    customerModule,
    RouterModule.forRoot(appRoutes)  
  ]
})

export class AppModule{

}