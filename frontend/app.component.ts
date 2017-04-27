import {Component} from '@angular/core';
import './app.less'

@Component({
  selector: 'app',
  templateUrl: './app.template.html',
})

export class AppComponent {
  name: string = 'kapko';
  urls: any = [
    {
      url: 'contacts',
      name: 'Contacts'
    },
    {
      url: 'projects',
      name: 'Projects'
    },
    {
      url: 'about-me',
      name: 'About me'
    },
    {
      url: '',
      name: 'Home'
    }
  ]
}
