package com.project.FoodHub.service;

import com.project.FoodHub.dto.AuthRequest;
import com.project.FoodHub.dto.AuthResponse;
import com.project.FoodHub.dto.CreadorDTO;
import com.project.FoodHub.entity.Creador;

import java.util.List;
import java.util.Optional;

public interface ICreadorService {

    public List<Creador> mostrarCreadores();

    public Optional<String> crearCuenta(Creador creador);

    public AuthResponse iniciarSesion(AuthRequest authRequest);

    public Integer obtenerCantidadDeRecetasCreadas();

    public CreadorDTO verPerfil();

    public int enableUser(String email);
}
