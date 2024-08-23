import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tipos-de-passageiro',
  templateUrl: './tipos-de-passageiro.component.html',
  styleUrls: ['./tipos-de-passageiro.component.scss'],
})
export class TiposDePassageiroComponent {
  @Input() tipoIdade: string = '';
  @Input() periodoIdade: string = '';
}
