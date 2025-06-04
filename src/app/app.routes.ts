import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'), //Layout o componente principal del apartado
        children: [
            {
                path: 'change-detection',
                title: 'ChangeDetection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {
                path: 'control-flow',
                title: 'ControlFlow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'DeferOptions',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },
            {
                path: 'defer-views',
                title: 'DeferViews',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {
                path: 'user/:id',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'user-list',
                title: 'Usuarios',
                loadComponent: () => import('./dashboard/pages/users/users.component')
            },
            {
                path: 'view-transition-1',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
                title: 'ViewTransition1'
            },
            {
                path: 'view-transition-2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
                title: 'ViewTransition2'
            },
            {
                path: '**',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ] //Rutas que van a mostrarse en el componente principal
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
