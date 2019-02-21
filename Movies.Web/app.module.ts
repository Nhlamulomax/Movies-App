import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { SignUpComponent } from './sign-up/sign-up.component';
//import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieService } from 'src/shared/movie.service';
import { RegisterMoveComponent } from './register-move/register-move.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'app-edit-movie', component: RegisterMoveComponent},

  { path: 'edit-movie', component: EditMovieComponent},

  { path: 'app-movies-list', component: MoviesListComponent},

  { path: '', redirectTo:'/add-movie', pathMatch: 'full'}  

];
@NgModule({
  declarations: [
    AppComponent,
    //SignUpComponent,
    //LoginComponent,
    RegisterMoveComponent,
    MoviesListComponent,
    HomeComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 