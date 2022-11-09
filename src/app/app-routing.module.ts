import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'pessoas', component: PessoaListaComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent },
  { path: 'pessoas/:id', component: PessoaCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
