import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.url;

  constructor(private hhtpClient: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    console.log("Url: ", this.url)
    return this.hhtpClient.get<Usuario[]>(this.url+'/Usuarios');
  }

  getUsuario(id: number): Observable<Usuario>{
    return this.hhtpClient.get<Usuario>(environment+'Usuarios/'+id);
  }

  addUsuario(usuario: Usuario): Observable<Usuario>{
    return this.hhtpClient.post<Usuario>(environment+'Usuarios', usuario);
  }

   updateUsuario(usuario: Usuario): Observable<Usuario>{
    return this.hhtpClient.put<Usuario>(environment+'Usuarios'+usuario.id, usuario);
   }

  deleteUsuario(id: number): Observable<any>{
    return this.hhtpClient.delete<number>(environment+'Usuarios'+id);
  }

}
