package com.project.FoodHub.service;

import com.project.FoodHub.dto.ConfirmacionResponse;
import com.project.FoodHub.dto.RecetasCategoriaResponse;
import com.project.FoodHub.dto.RecetaRequest;
import com.project.FoodHub.entity.*;

import java.util.List;

public interface IRecetaService {

    public ConfirmacionResponse crearReceta(RecetaRequest recetaRequest);

    public void agregarIngrediente(Receta receta, Ingrediente ingrediente);

    public List<RecetasCategoriaResponse> mostrarRecetasPorCategoria(Categoria categoria);

    public Receta verReceta(Long idReceta);

}
