package com.project.FoodHub.service;

public interface IColegiadoService {

    public boolean validarColegiado(String nombre,
                                    String apellidoPaterno,
                                    String apellidoMaterno,
                                    String codigoColegiado);

    public boolean isCuentaConfirmada(String codigoColegiado);

    public void confirmarCuenta(String codigoColegiado);

}
