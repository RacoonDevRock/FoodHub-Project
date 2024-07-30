import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-creador',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-creador.component.html',
  styleUrl: './header-creador.component.css'
})
export default class HeaderCreadorComponent {

}
