import { Component, NgModule  } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HeaderModule } from './header/header.module'

@Component({
	selector: 'app', 
	template: `<div class="container"><menu></menu></div>`
})
export class AppComponent{
}

@NgModule({
	imports: [ 
		BrowserModule,
		HeaderModule
	],
	declarations: [ 
		AppComponent,
	],
	bootstrap: [ AppComponent ],
}) 

export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
