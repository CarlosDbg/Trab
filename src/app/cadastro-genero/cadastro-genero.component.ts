import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { GeneroService } from '../services/genero.service';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-cadastro-genero',
  templateUrl: './cadastro-genero.component.html',
  styleUrls: ['./cadastro-genero.component.scss']
})
export class CadastroGeneroComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  

  constructor(
    private formBuilder: FormBuilder,
    private generoService: GeneroService,
    ) {




   }

  ngOnInit(): void {
  }

  async submit(){
    if (!this.formulario.valid){
      return;
    }

    this.formulario.disable();

    const genero = this.formulario.value as Genero;
    const generoRetorno = await this.generoService.add(genero);



    this.formulario.enable();
    this.formGroupDirective.resetForm();


  }

}
