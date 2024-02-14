import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment;

  constructor(private hhtpClient: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.hhtpClient.get<Usuario[]>(environment+'/Usuarios');
  }

  getUsuario(id: number): Observable<Usuario>{
    return this.hhtpClient.get<Usuario>(environment+'Usuarios/'+id);
  }

  // updateUsuario(usuario: Usuario): Observable<Usuario>{
  //   return this.hhtpClient.post<Usuario>(environment, usuario);
  // }

  deleteUsuario(){

  }

}
