import {NgModule} from '@angular/core'
import {HeaderComponent} from './header.component'
import {CommonModule} from '@angular/common'

@NgModule({
	exports: [
		HeaderComponent,
		CommonModule
	],
	declarations: [
		HeaderComponent,
		CommonModule
	]
})

export class HeaderModule{}
