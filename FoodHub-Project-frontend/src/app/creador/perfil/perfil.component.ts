import { Component, OnInit } from '@angular/core';
import { CreadorDTO } from '../../interfaces/CreadorDTO';
import { CreadorService } from '../../services/creador.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export default class PerfilComponent implements OnInit {
  creadorDTO: CreadorDTO = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    contrasenia: '',
    codigoColegiatura: '',
  };

  defaultImage: string = '../../assets/images/default-profile-image.jpg';
  preview: string | ArrayBuffer | null = this.defaultImage;

  constructor(private creadorService: CreadorService) {}

  ngOnInit(): void {
    this.obtenerDatosPerfilCreador();
  }

  obtenerDatosPerfilCreador() {
    this.creadorService.verPerfil().subscribe(
      (response) => {
        this.creadorDTO = response;
      },
      (error) => {
        console.error(`${error.name}: ${error.message}`);
      }
    );
  }
}
