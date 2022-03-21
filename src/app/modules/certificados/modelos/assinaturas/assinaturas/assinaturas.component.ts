import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.component.html',
  styleUrls: ['./assinaturas.component.scss']
})
export class AssinaturasComponent implements OnInit {

  constructor() { }


  @Input() nome: string;
  @Input() alan: boolean;
  @Input() higor: boolean;
  @Input() melquezedeque: boolean;
  @Input() assinatura1: string;
  @Input() assinatura2: string;
  @Input() isAssinatura: boolean;


  ngOnInit(): void {
  }

}
