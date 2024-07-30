import { Component, OnInit } from '@angular/core';
import { CreadorService } from '../../services/creador.service';

@Component({
  selector: 'app-gestionar-receta',
  standalone: true,
  imports: [],
  templateUrl: './gestionar-receta.component.html',
  styleUrl: './gestionar-receta.component.css',
})
export default class GestionarRecetaComponent implements OnInit {
  cantidadRecetas = 0;

  constructor(private creadorService: CreadorService) {}

  ngOnInit(): void {
    this.obtenerCantidadRecetas();
  }

  obtenerCantidadRecetas() {
    this.creadorService.obtenerCantidadRecetasCreadas().subscribe(
      (response) => {
        this.cantidadRecetas = response;
        console.log(`Cantidad de recetas: ${this.cantidadRecetas} recetas`);
      },
      (error) => {
        console.error(`${error.name}: ${error.message}`);
      }
    );
  }
}
