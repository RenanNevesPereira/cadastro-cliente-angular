import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    { path: 'cadastro' , component: CadastroComponent },
    { path: 'cliente' , component: ClienteComponent }
];
