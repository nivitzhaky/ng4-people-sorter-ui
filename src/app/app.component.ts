import { Component } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import {  HeaderComponent} from './components/header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
