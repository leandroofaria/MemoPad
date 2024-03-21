import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thoughts } from '../thoughts';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos: Thoughts[] = []

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.listar()
  }
}
