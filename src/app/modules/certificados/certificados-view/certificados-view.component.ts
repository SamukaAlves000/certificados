import {Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {CertificadosService, DetalhesCertificado, IsCertificado} from '../certificados.service';
import {Router} from '@angular/router';

import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-certificados-view',
  templateUrl: './certificados-view.component.html',
  styleUrls: ['./certificados-view.component.scss']
})
export class CertificadosViewComponent implements OnInit {

  @ViewChild('to-pdf') element: ElementRef;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  width: 1295;
  height: 918;

  listaAlunos = [];

  detalhesCertificados: DetalhesCertificado = {
    alunos: [],
    dataCurso: '',
    cidade: '',
    cnpj: '',
    horas: '',
    razaoSocial: '',
    assiantura1: '',
    assiantura2: '',
    titulo: '',
    tema: '',
    duracao: '',
    dataLista: '',
    isDuasAssiantura: false

  };

  isCertificados: IsCertificado = {
    modelos: []
  };

  constructor(private certificadoService: CertificadosService, private router: Router) {
    this.isListar = true;
  }

  private isListar: boolean;


  ngOnInit(): void {
    if (!(localStorage.getItem('user') === 'true')) {
      this.router.navigate(['login']);
    }
    this.certificadoService.currentDetalhesCertificados.subscribe(value => {
      this.detalhesCertificados = value;
      if (this.isListar) {
        this.teste();
        this.isListar = false;
      }
    });

    this.certificadoService.currentIsCertificado.subscribe(value => {
      this.isCertificados = value;
    });
  }

  teste(): void {

    const doc = new jsPDF('p', 'pt');

    autoTable(doc, {
      startY: 60,
      body: [
        [
          {
            content: 'IMG',
            rowSpan: 2,
            styles: {minCellWidth: 110, minCellHeight: 55},
          },
          {
            content: 'REGISTRO DE TREINAMENTO',
            rowSpan: 1,
            styles: {halign: 'center', fontSize: 14, fontStyle: 'bold'},
          },
          {
            content: 'Data:' + this.detalhesCertificados.dataLista,
            rowSpan: 2,
            styles: {minCellWidth: 110, minCellHeight: 55, halign: 'center', fontStyle: 'bold'},
          }
        ],
        [
          {
            content: this.detalhesCertificados.titulo,
            rowSpan: 1,
            styles: {halign: 'center', fontSize: 12},
          }
        ],
        [
          {
            content: 'Empresa: ' + this.detalhesCertificados.razaoSocial,
            colSpan: 3,
            styles: {fontSize: 12, fontStyle: 'bold'},
          }
        ], [
          {
            content: 'Tema',
            colSpan: 2,
            styles: {fontSize: 12, fontStyle: 'bold'},
          },
          {
            content: 'Duração',
            colSpan: 1,
            styles: {fontSize: 12, fontStyle: 'bold'},
          }
        ], [
          {
            content: this.detalhesCertificados.tema,
            colSpan: 2,
            styles: {fontSize: 12},
          },
          {
            content: this.detalhesCertificados.duracao,
            colSpan: 1,
            styles: {fontSize: 12},
          }
        ]
      ],
      theme: 'grid',
      didDrawCell: (data) => {
        // @ts-ignore
        if (data.section === 'body' && data.column.index === 0 && 'content' in data.cell.raw && data.cell.raw.content === 'IMG') {
          // tslint:disable-next-line:no-shadowed-variable
          const base64Img = 'assets/images/certificados/modelos/logo.png';
          doc.addImage(base64Img, 'JPEG', data.cell.x + 2, data.cell.y + 2, 100, 40);
        }
      }
    });

    autoTable(doc, {
      startY: 200,
      head: [['PART', 'NOME', 'FUNÇÃO', 'ASSINATURA']],
      body: this.getListaAlunos(),
      theme: 'grid',
    });

    const finalY = (doc as any).lastAutoTable.finalY + 20;

    console.log(this.detalhesCertificados.assiantura1);
    console.log(this.detalhesCertificados.assiantura2);


    let base64Img = '';

    if (this.detalhesCertificados.isDuasAssiantura) {

      if ((this.detalhesCertificados.assiantura1 === '1' && this.detalhesCertificados.assiantura2 === '2')
        || (this.detalhesCertificados.assiantura2 === '1' && this.detalhesCertificados.assiantura1 === '2')) {
        doc.addImage('assets/images/certificados/modelos/assinaturaAlan.jpg', 'JPEG', 70, finalY, 200, 100);
        doc.addImage('assets/images/certificados/modelos/assinaturaMel.jpg', 'JPEG', 300, finalY, 200, 100);
      }

      if ((this.detalhesCertificados.assiantura1 === '1' && this.detalhesCertificados.assiantura2 === '3')
        || (this.detalhesCertificados.assiantura2 === '1' && this.detalhesCertificados.assiantura1 === '3')) {
        doc.addImage('assets/images/certificados/modelos/assinaturaAlan.jpg', 'JPEG', 70, finalY, 200, 100);
        doc.addImage('assets/images/certificados/modelos/assinaturaIgor.jpg', 'JPEG', 300, finalY, 200, 100);
      }

      if ((this.detalhesCertificados.assiantura1 === '2' && this.detalhesCertificados.assiantura2 === '3')
        || (this.detalhesCertificados.assiantura2 === '2' && this.detalhesCertificados.assiantura1 === '3')) {
        doc.addImage('assets/images/certificados/modelos/assinaturaIgor.jpg', 'JPEG', 70, finalY, 200, 100);
        doc.addImage('assets/images/certificados/modelos/assinaturaMel.jpg', 'JPEG', 300, finalY, 200, 100);
      }

    } else {
      if (this.detalhesCertificados.assiantura1 === '1') {
        base64Img = 'assets/images/certificados/modelos/assinaturaAlan.jpg';
      }

      if (this.detalhesCertificados.assiantura1 === '2') {
        base64Img = 'assets/images/certificados/modelos/assinaturaMel.jpg';
      }

      if (this.detalhesCertificados.assiantura1 === '3') {
        base64Img = 'assets/images/certificados/modelos/assinaturaIgor.jpg';
      }
      doc.addImage(base64Img, 'JPEG', 180, finalY, 200, 100);
    }

    doc.save(this.detalhesCertificados.titulo + ' ' + new Date().toLocaleDateString() + '_' + new Date().toLocaleTimeString() +  '.pdf');
  }

  getListaAlunos(): any[] {

    for (let i = 0; i < this.detalhesCertificados.alunos.length; i++) {
      const item = [
        {
          content: i <= 9 ? '0' + (i + 1).toString() : (i + 1).toString(),
        },
        {
          content: this.detalhesCertificados.alunos[i].nome,
        },
        {
          content: this.detalhesCertificados.alunos[i].funcao,
        },
        {
          content: '',
          styles: {minCellWidth: 120}
        }
      ];
      this.listaAlunos.push(item);
    }
    return this.listaAlunos;
  }

  // tslint:disable-next-line:typedef
  generatePDF() {
    const data = document.getElementById('to-pdf');
    // @ts-ignore
    html2canvas(data).then(canvas => {
      let imgWidth = 208;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth + 100, imgHeight + 70);
      imgWidth = 208;
      imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth + 100, imgHeight + 70);
      pdf.save('newPDF.pdf');
    });
  }

}
