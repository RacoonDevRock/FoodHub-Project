import { Component } from '@angular/core';
import { HeaderExploradorComponent } from "../header/header-explorador.component";
import CategoriasComponent from "../../categorias/categorias.component";

@Component({
  selector: 'app-explorar-recetas',
  standalone: true,
  imports: [CategoriasComponent, HeaderExploradorComponent],
  templateUrl: './explorar-recetas.component.html',
  styleUrl: './explorar-recetas.component.css'
})
export default class ExplorarRecetasComponent {

}
