import { Component } from '@angular/core';
import { Thoughts } from '../thoughts';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: Thoughts = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

  criarPensamento() {
    
  }

  cancelar() {

  }
}
