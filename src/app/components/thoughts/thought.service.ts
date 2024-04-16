import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thoughts } from './thoughts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Thoughts[]> {
    return this.http.get<Thoughts[]>(this.API)
  }

  criar(pensamento: Thoughts): Observable<Thoughts> {
    return this.http.post<Thoughts>(this.API, pensamento)
  }

  excluir(id: number): Observable<Thoughts> {
    const url = `${this.API}/${id}`; // Corrigido o formato da URL
    return this.http.delete<Thoughts>(url);
  }
  
  buscarPorId(id: number): Observable<Thoughts> {
    const url = `${this.API}/${id}`
    return this.http.get<Thoughts>(url)
  }

}
 