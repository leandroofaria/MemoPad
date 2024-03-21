import { Component, Input } from '@angular/core';
import { Thoughts } from '../thoughts';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

 @Input() pensamento: Thoughts = {
    id: 0,
    conteudo:'Comunicação entre componentes',
    autoria:'leandro',
    modelo:'modelo3'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
