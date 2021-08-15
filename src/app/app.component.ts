import { Component } from '@angular/core';
import { Link } from './models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProd';

  listeLien : Link[] = [
    {url : 'home', title : 'Liste de Fans', icon: 'home'},
    {url : 'create', title : 'Ajouter', icon: 'person_add'}
  ]
}
