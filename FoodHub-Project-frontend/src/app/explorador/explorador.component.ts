import { Component } from "@angular/core";
import { HeaderExploradorComponent } from "./header/header-explorador.component";
import InicioComponent from "./inicio/inicio.component";
import AlmuerzoComponent from "../categorias/almuerzo/almuerzo.component";
import ExplorarRecetasComponent from "./explorar-recetas/explorar-recetas.component";
import ExplorarRecetaComponent from "../creador/explorar-receta/explorar-receta.component";

@Component({
    selector: 'app-explorador',
    standalone: true,
    imports: [HeaderExploradorComponent, InicioComponent, AlmuerzoComponent, ExplorarRecetasComponent, ExplorarRecetaComponent],
    templateUrl: './explorador.component.html',
    styleUrl: './explorador.component.css'
})
export default class ExploradorComponent {
    title = 'explorador';
}