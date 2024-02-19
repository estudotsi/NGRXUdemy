import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent implements OnInit{

  public usuarios?: Usuario[];

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
        console.log("Aqui: ", this.usuarios);
      },
      error: (erro: any) => {
        console.log("Error: ", erro.error)
      },
      complete: () => {
        console.log("Completou")
      }
    })
  }

}


