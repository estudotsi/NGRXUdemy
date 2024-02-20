import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/usuario.model';
import {v4 as uuidv4} from 'uuid';
import * as fromUsuarioActions from '../store/usuario/usuario.actions'
import { Appstate } from '../store/usuario/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent implements OnInit{

  public formUsuario!: FormGroup;
  idInicial = 0;

  constructor(private usuarioService: UsuarioService,
              private store: Store<Appstate>){

  }

  ngOnInit(): void {
    this.formUsuario = new FormGroup({
      id: new FormControl(this.idInicial),
      nome: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required]),
      perfil: new FormControl('', [Validators.required]),
    })
  }

  // public salvarUsuario():void{
  //   let id = uuidv4();
  //   let result = id.replace(/\D/g, '');
  //   let resultSliced = result.slice(0, 5)
  //   this.formUsuario.value.id = resultSliced;
  //     this.usuarioService.addUsuario(this.formUsuario.value).subscribe({
  //       next: (usuario: Usuario) => {
  //         console.log(usuario);
  //         },
  //       error: (error: any) =>{
  //         console.log("Erro: ", error.error);
  //       },
  //       complete: () => {
  //         console.log("Completou");
  //       }
  //     })
  // }

  salvarUsuario(){
    if(this.formUsuario.value.id == 0){
      let id = uuidv4();
      let result = id.replace(/\D/g, '');
      let resultSliced = result.slice(0, 5)
      this.formUsuario.value.id = resultSliced;
      this.store.dispatch(fromUsuarioActions.createUsuario({ payload: this.formUsuario.value }))
    }
    else{

    }
  }

}
