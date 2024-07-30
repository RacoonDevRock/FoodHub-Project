import { Component } from '@angular/core';
import { HeaderExploradorComponent } from "../../explorador/header/header-explorador.component";
import CategoriasComponent from "../../categorias/categorias.component";

@Component({
  selector: 'app-explorar-receta',
  standalone: true,
  imports: [HeaderExploradorComponent, CategoriasComponent],
  templateUrl: './explorar-receta.component.html',
  styleUrl: './explorar-receta.component.css'
})
export default class ExplorarRecetaComponent {

}
