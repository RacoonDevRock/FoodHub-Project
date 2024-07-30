import { Component } from '@angular/core';
import HeaderCreadorComponent from "./header/header-creador.component";

@Component({
  selector: 'app-creador',
  standalone: true,
  imports: [HeaderCreadorComponent],
  templateUrl: './creador.component.html',
  styleUrl: './creador.component.css',
})
export default class CreadorComponent {
  title = 'creador';
}
