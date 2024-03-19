import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/thoughts/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/thoughts/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamentoComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent } // Corrigido: removida vírgula extra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
