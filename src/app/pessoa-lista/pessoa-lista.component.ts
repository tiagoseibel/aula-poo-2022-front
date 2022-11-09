import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../service/pessoa-service';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  pessoas: Array<any> = [];

  constructor(
    private service: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
      (response) => {
        this.pessoas = response
      }
    );
  }

  editar(id: any): void {
    this.router.navigate(['pessoas', id]);
  }

}
