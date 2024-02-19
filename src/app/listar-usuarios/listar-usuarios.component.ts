import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/usuario/app.state';
import * as fromUsuarioAction from '../store/usuario/usuario.actions';
import * as fromUsuarioSelector from '../store/usuario/usuario.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent implements OnInit{

  public usuarios?: Usuario[];
  public listaUsuarios$: Observable<Usuario[]> = this.store.select(fromUsuarioSelector.getUsuarios);;

  constructor(private usuarioService: UsuarioService,
              private store: Store<Appstate>){

  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  // listarUsuarios(): void {
  //   this.usuarioService.getUsuarios().subscribe({
  //     next: (data: Usuario[]) => {
  //       this.usuarios = data;
  //       console.log("Aqui: ", this.usuarios);
  //     },
  //     error: (erro: any) => {
  //       console.log("Error: ", erro.error)
  //     },
  //     complete: () => {
  //       console.log("Completou")
  //     }
  //   })
  // }

  listarUsuarios() {
    this.store.dispatch(fromUsuarioAction.loadUsuarios())
  }

}


