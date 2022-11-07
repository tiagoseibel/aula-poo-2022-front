import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from './pessoa-service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoas: Array<any> = [];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: PessoaService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        id: [],
        nome: [null, Validators.required]
      }
    );

    this.service.listar().subscribe(
      (response) => {
        this.pessoas = response
      }
    );
  }

  save(): void {
    console.log("Ok...");
    console.log(this.form.value);

    this.service.create(this.form.value).subscribe(
      (response) => {
        console.log(response);
      }
    )
    this.form.reset();
  }
}
