import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'explorador',
        loadComponent: () => import('./explorador/explorador.component'),
        children: [
          {
            path: '',
            loadComponent: () => import('./explorador/inicio/inicio.component')
          },
          {
            path: 'explorarRecetas',
            loadComponent: () => import('./explorador/explorar-recetas/explorar-recetas.component')
          },
          {
            path: 'iniciarSesion',
            loadComponent: () => import('./explorador/iniciar-sesion/iniciar-sesion.component')
          },
          {
            path: 'cocinaTuCuenta',
            loadComponent: () => import('./explorador/crear-cuenta/crear-cuenta.component')
          },
          {
            path: 'ingresar',
            loadComponent: () => import('./explorador/inicio/inicio.component')
          }
        ]
    },
    {
        path: 'ingresar',
        loadComponent: () => import('./creador/creador.component'),
        children: [
          {
            path: '',
            loadComponent: () =>  import('./creador/explorar-receta/explorar-receta.component')
          },
          {
            path: 'gestionDeRecetas',
            loadComponent: () =>  import('./creador/gestionar-receta/gestionar-receta.component')
          },
          {
            path: 'miPerfil',
            loadComponent: () =>  import('./creador/perfil/perfil.component')
          },
          {
            path: 'crearReceta',
            loadComponent: () =>  import('./creador/crear-receta/crear-receta.component')
          }
        ]
    },
    {
        path: 'categorias',
        loadComponent: () => import('./categorias/categorias.component'),
        children: [
            {
                path: 'inicio',
                loadComponent: () => import('./categorias/inicio/inicio.component')
            },
            {
              path: 'desayuno',
              loadComponent: () => import('./categorias/desayuno/desayuno.component')
            },
            {
              path: 'almuerzo',
              loadComponent: () => import('./categorias/almuerzo/almuerzo.component')
            },
            {
              path: 'cena',
              loadComponent: () => import('./categorias/cena/cena.component')
            },
            {
              path: 'postres',
              loadComponent: () => import('./categorias/postres/postres.component')
            },
            {
              path: 'superavit',
              loadComponent: () => import('./categorias/superavit/superavit.component')
            },
            {
              path: 'deficit',
              loadComponent: () => import('./categorias/deficit/deficit.component')
            },
            {
              path: 'cardBody/:id',
              loadComponent: () => import('./categorias/card-body/card-body.component')
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/explorador'
    }
];
