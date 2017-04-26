import { NgModule, Component} from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// modules
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import {About} from './about/about.component'
import {Projects} from './projects/project.component'

const Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: About
  },
  {
    path: 'projects',
    component: Projects
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Projects,
    About,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(Routes),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
