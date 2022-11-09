import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PessoaService } from '../service/pessoa-service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  departamentos = [{
    id: 1,
    nome: "TI"
  }];

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: PessoaService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        id: [],
        nome: [null, Validators.required],
        endereco: [null],
        departamento: new FormControl()
      }
    );

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.preencherForm(id);
    }
  }

  preencherForm(id: any): void {
    this.service.byId(id).subscribe (
      (response) => {
        this.form.patchValue(response);
      }
    );
  }

  save(): void {
    this.service.createOrUpdate(this.form.value).subscribe(
      (response) => {
        this.router.navigate(['/pessoas']);
      }
    )
    this.form.reset();
  }
}
