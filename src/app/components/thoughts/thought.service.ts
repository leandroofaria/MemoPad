import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thoughts } from './thoughts';


@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Thoughts[]>(this.API)
  }

}
