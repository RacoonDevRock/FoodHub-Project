import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { HeaderExploradorComponent } from "../explorador/header/header-explorador.component";
import HeaderCreadorComponent from "../creador/header/header-creador.component";

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [HeaderExploradorComponent, HeaderCreadorComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export default class CategoriasComponent implements OnInit {
  title = 'categorias';

  public tipo: string = '';
  public header: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.tipo = this.sharedService.getTipo();
    console.log('tipo de muestra: ', this.tipo);
    if (this.tipo === 'creador') {
      this.header = 2;
    } else {
      this.header = 1;
    }
  }
}
