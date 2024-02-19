import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/usuario.model';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent implements OnInit{

  public formUsuario!: FormGroup;

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit(): void {
    this.formUsuario = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required]),
      perfil: new FormControl('', [Validators.required]),
    })
  }

  public salvarUsuario():void{
    this.formUsuario.value.id = uuidv4();
      this.usuarioService.addUsuario(this.formUsuario.value).subscribe({
        next: (usuario: Usuario) => {
          console.log(usuario);
          },
        error: (error: any) =>{
          console.log("Erro: ", error.error);
        },
        complete: () => {
          console.log("Completou");
        }
      })

  }

}
