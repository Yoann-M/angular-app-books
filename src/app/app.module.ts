import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from './components/books/books.component';
import { BooksDetailComponent } from './components/books/books-detail/books-detail.component';
import { BooksFormComponent } from './components/books/books-form/books-form.component';
import { AuthSigninComponent } from './components/auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth/auth-signup/auth-signup.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BooksDetailComponent,
    BooksFormComponent,
    AuthSigninComponent,
    AuthSignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
