import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Aluno} from './certificados-create/certificados-create.component';
import {Modelo} from './certificados.component';

export class DetalhesCertificado {
  alunos: Aluno[];
  cidade: string;
  dataCurso: string;
  cnpj: string;
  horas: string;
  razaoSocial: string;
  assiantura1: string;
  assiantura2: string;
  titulo: string;
  dataLista: string;
  tema: string;
  duracao: string;
  isDuasAssiantura: boolean;
}

export class IsCertificado {
  modelos: Modelo[];
}

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {

  constructor() {
  }

  public isCertificados: IsCertificado = {
    modelos: [{
      id: 0,
      nome: 'Resgate Primeiros socorros',
      fotos: ['assets/images/certificados/modelos/Certificado de resgate Primeiros socorros001.png', 'assets/images/certificados/modelos/Certificado de resgate Primeiros socorros002.png'],
      isSelecionado: false
    }, {
      id: 1,
      nome: 'Direção Defensiva',
      fotos: ['assets/images/certificados/modelos/Certificado Direção Defensiva001.png', 'assets/images/certificados/modelos/Certificado Direção Defensiva002.png'],
      isSelecionado: false
    }, {
      id: 2,
      nome: 'NR 5 - CIPA',
      fotos: ['assets/images/certificados/modelos/Certificado NR 5 - CIPA.001.png', 'assets/images/certificados/modelos/Certificado NR 5 - CIPA.002.png'],
      isSelecionado: false
    }, {
      id: 3,
      nome: 'NR 6 - EPI´S',
      fotos: ['assets/images/certificados/modelos/Certificado NR 6 - EPI´S001.png', 'assets/images/certificados/modelos/Certificado NR 6 - EPI´S002.png'],
      isSelecionado: false
    }, {
      id: 4,
      nome: 'NR 7 - Primeiros Socorros',
      fotos: ['assets/images/certificados/modelos/Certificado NR 7 - Primeiros Socorros001.png', 'assets/images/certificados/modelos/Certificado NR 7 - Primeiros Socorros001.png'],
      isSelecionado: false
    }, {
      id: 5,
      nome: 'NR 10 - SEP',
      fotos: ['assets/images/certificados/modelos/Certificado NR 10 - SEP001.png', 'assets/images/certificados/modelos/Certificado NR 10 - SEP002.png'],
      isSelecionado: false
    }, {
      id: 6,
      nome: 'NR 11 - Mov. Arm. Cargas',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Mov. Arm. Cargas001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Mov. Arm. Cargas002.png'],
      isSelecionado: false
    }, {
      id: 7,
      nome: 'NR 11 - Amarração de Carga',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Amarração de Carga001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Amarração de Carga002.png'],
      isSelecionado: false
    }, {
      id: 8,
      nome: 'NR 11 - Op. Empilhadeira',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Empilhadeira001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Empilhadeira002.png'],
      isSelecionado: false
    }, {
      id: 9,
      nome: 'NR 11 - Op. Escavadeira Hidráulica',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Escavadeira Hidráulica001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Escavadeira Hidráulica002.png'],
      isSelecionado: false
    }, {
      id: 10,
      nome: 'NR 11 - Op. Mini Pá Carregadeira',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Mini Pá Carregadeira001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Mini Pá Carregadeira002.png'],
      isSelecionado: false
    }, {
      id: 11,
      nome: 'NR 11 - Op. Munck',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Munck001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Munck001.png'],
      isSelecionado: false
    }, {
      id: 12,
      nome: 'NR 11 - Op. Pá Carregadeira',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Pá Carregadeira001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Pá Carregadeira002.png'],
      isSelecionado: false
    }, {
      id: 13,
      nome: 'NR 11 - Op. Prensa Enfardadeira',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Prensa Enfardadeira001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Prensa Enfardadeira002.png'],
      isSelecionado: false
    }, {
      id: 14,
      nome: 'NR 11 - Op. Rolo Compactador',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Rolo Compactador001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Rolo Compactador002.png'],
      isSelecionado: false
    }, {
      id: 15,
      nome: 'NR 11 - Op. Transpaleteira',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Transpaleteira001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Transpaleteira002.png'],
      isSelecionado: false
    }, {
      id: 16,
      nome: 'NR 11 - Op. Trator Agrícola',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Trator Agricola001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Trator Agricola002.png'],
      isSelecionado: false
    }, {
      id: 17,
      nome: 'NR 11 - Op. Trator Esteira',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Op. Trator Esteira001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Op. Trator Esteira002.png'],
      isSelecionado: false
    }, {
      id: 18,
      nome: 'NR 11 - Sinalização e Amarração de Carga',
      fotos: ['assets/images/certificados/modelos/Certificado NR 11 - Sinalização e Amarração de Carga001.png', 'assets/images/certificados/modelos/Certificado NR 11 - Sinalização e Amarração de Carga002.png'],
      isSelecionado: false
    }, {
      id: 19,
      nome: 'NR 12 - Ferramens Manuais',
      fotos: ['assets/images/certificados/modelos/Certificado NR 12 - Ferramens Manuais001.png', 'assets/images/certificados/modelos/Certificado NR 12 - Ferramens Manuais002.png'],
      isSelecionado: false
    }, {
      id: 20,
      nome: 'NR 12 - Ferramens Rot. Eletrop',
      fotos: ['assets/images/certificados/modelos/Certificado NR 12 - Ferramens Rot. Eletrop001.png', 'assets/images/certificados/modelos/Certificado NR 12 - Ferramens Rot. Eletrop002.png'],
      isSelecionado: false
    }, {
      id: 21,
      nome: 'NR 12 - NR 31 - Op. MotoPoda',
      fotos: ['assets/images/certificados/modelos/Certificado NR 12 - NR 31 - Op. Moto Poda001.png', 'assets/images/certificados/modelos/Certificado NR 12 - NR 31 - Op. Moto Poda002.png'],
      isSelecionado: false
    }, {
      id: 22,
      nome: 'NR 12 - NR 31 - Op. Roçadeira Costas',
      fotos: ['assets/images/certificados/modelos/Certificado NR 12 - NR 31 - Op. Roçadeira Costas001.png', 'assets/images/certificados/modelos/Certificado NR 12 - NR 31 - Op. Roçadeira Costas001.png'],
      isSelecionado: false
    }, {
      id: 23,
      nome: 'NR 12 - Prot. Maq. Equipamentos',
      fotos: ['assets/images/certificados/modelos/Certificado NR 12 - Prot. Maq. Equipamentos001.png', 'assets/images/certificados/modelos/Certificado NR 12 - Prot. Maq. Equipamentos002.png'],
      isSelecionado: false
    }, {
      id: 24,
      nome: 'NR 12- NR 31 - Seg. Op. Maq. Agricolas',
      fotos: ['assets/images/certificados/modelos/Certificado NR 12- NR 31 - Seg. Op. Maq. Agricolas001.png', 'assets/images/certificados/modelos/Certificado NR 12- NR 31 - Seg. Op. Maq. Agricolas002.png'],
      isSelecionado: false
    }, {
      id: 25,
      nome: 'NR 17 - Ergonomia',
      fotos: ['assets/images/certificados/modelos/Certificado NR 17 - Ergonomia001.png', 'assets/images/certificados/modelos/Certificado NR 17 - Ergonomia002.png'],
      isSelecionado: false
    }, {
      id: 26,
      nome: 'NR 18 - Mont. Andaimes',
      fotos: ['assets/images/certificados/modelos/Certificado NR 18 - Mont. Andaimes001.png', 'assets/images/certificados/modelos/Certificado NR 18 - Mont. Andaimes002.png'],
      isSelecionado: false
    }, {
      id: 27,
      nome: 'NR 18 - Op. PTA',
      fotos: ['assets/images/certificados/modelos/Certificado NR 18 - Op. PTA001.png', 'assets/images/certificados/modelos/Certificado NR 18 - Op. PTA002.png'],
      isSelecionado: false
    }, {
      id: 28,
      nome: 'NR 18',
      fotos: ['assets/images/certificados/modelos/Certificado NR 18001.png', 'assets/images/certificados/modelos/Certificado NR 18002.png'],
      isSelecionado: false
    }, {
      id: 29,
      nome: 'NR 23 - Combate a Incêndio',
      fotos: ['assets/images/certificados/modelos/Certificado NR 23 - Combate a Incêndio001.png', 'assets/images/certificados/modelos/Certificado NR 23 - Combate a Incêndio002.png'],
      isSelecionado: false
    }, {
      id: 30,
      nome: 'NR 26 - NR 36 - Produtos Quimicos',
      fotos: ['assets/images/certificados/modelos/Certificado NR 26 - NR 36 - Produtos Quimicos001.png', 'assets/images/certificados/modelos/Certificado NR 26 - NR 36 - Produtos Quimicos002.png'],
      isSelecionado: false
    }, {
      id: 31,
      nome: 'NR 31 - Manip. Agrot. em Pulv. costal-gasolina',
      fotos: ['assets/images/certificados/modelos/Certificado NR 31 - Manip. Agrot. em Pulverizador costal-gasolina001.png', 'assets/images/certificados/modelos/Certificado NR 31 - Manip. Agrot. em Pulverizador costal-gasolina002.png'],
      isSelecionado: false
    }, {
      id: 32,
      nome: 'NR 33 - Esp. Confinado',
      fotos: ['assets/images/certificados/modelos/Certificado NR 33 - Esp. Confinado001.png', 'assets/images/certificados/modelos/Certificado NR 33 - Esp. Confinado002.png'],
      isSelecionado: false
    }, {
      id: 33,
      nome: 'NR 33 - Esp. Confinado - TOTAL',
      fotos: ['assets/images/certificados/modelos/Certificado NR 34 - Esp. Confinado - TOTAL001.png', 'assets/images/certificados/modelos/Certificado NR 34 - Esp. Confinado - TOTAL002.png'],
      isSelecionado: false
    }, {
      id: 34,
      nome: 'NR 34 - Maq. Rotativas',
      fotos: ['assets/images/certificados/modelos/Certificado NR 34 - Maq. Rotativas001.png', 'assets/images/certificados/modelos/Certificado NR 34 - Maq. Rotativas002.png'],
      isSelecionado: false
    }, {
      id: 35,
      nome: 'NR 34 - Trab. A Quente',
      fotos: ['assets/images/certificados/modelos/Certificado NR 34 - Trab. A Quente001.png', 'assets/images/certificados/modelos/Certificado NR 34 - Trab. A Quente002.png'],
      isSelecionado: false
    }, {
      id: 36,
      nome: 'NR 35 - Linha de Vida',
      fotos: ['assets/images/certificados/modelos/Certificado NR 35 - Linha de Vida001.png', 'assets/images/certificados/modelos/Certificado NR 35 - Linha de Vida002.png'],
      isSelecionado: false
    }, {
      id: 37,
      nome: 'NR 35 - Taludes',
      fotos: ['assets/images/certificados/modelos/Certificado NR 35 - Taludes001.png', 'assets/images/certificados/modelos/Certificado NR 35 - Taludes002.png'],
      isSelecionado: false
    }, {
      id: 38,
      nome: 'NR 35 - Trab. Altura',
      fotos: ['assets/images/certificados/modelos/Certificado NR 35 - Trab. Altura001.png', 'assets/images/certificados/modelos/Certificado NR 35 - Trab. Altura002.png'],
      isSelecionado: false
    }, {
      id: 39,
      nome: 'NR 23 - Brigada de Incendio I',
      fotos: ['assets/images/certificados/modelos/Cetificado NR 23 - Brigada de Incendio I001.png', 'assets/images/certificados/modelos/Cetificado NR 23 - Brigada de Incendio I002.png'],
      isSelecionado: false
    }, {
      id: 40,
      nome: 'NR 23 - Brigada de Incendio',
      fotos: ['assets/images/certificados/modelos/Cetificado NR 23 - Brigada de Incendio001.png', 'assets/images/certificados/modelos/Cetificado NR 23 - Brigada de Incendio002.png'],
      isSelecionado: false
    }, {
      id: 41,
      nome: 'NR 33 - Supervisor de Esp. Confinado',
      fotos: ['assets/images/certificados/modelos/Cetificado NR 33 - Supervisor de Esp. Confinado001.png', 'assets/images/certificados/modelos/Cetificado NR 33 - Supervisor de Esp. Confinado002.png'],
      isSelecionado: false
    }, {
      id: 42,
      nome: 'RAC 01 Vale',
      fotos: ['assets/images/certificados/modelos/Certificado RAC 01 Vale001.png'],
      isSelecionado: false
    }, {
      id: 43,
      nome: 'RAC 02 Vale',
      fotos: ['assets/images/certificados/modelos/Certificado RAC 02 Vale001.png'],
      isSelecionado: false
    }, {
      id: 44,
      nome: 'NR 34 - Trab. A Quente - TOTAL',
      fotos: ['assets/images/certificados/modelos/Certificado NR 34 - Trab. A Quente - TOTAL001.png', 'assets/images/certificados/modelos/Certificado NR 34 - Trab. A Quente - TOTAL002.png'],
      isSelecionado: false
    }, {
      id: 45,
      nome: 'NR 35 - Trabalho em Altura - TOTAL',
      fotos: ['assets/images/certificados/modelos/Certificado NR 35 - Trabalho em Altura - TOTAL001.png', 'assets/images/certificados/modelos/Certificado NR 35 - Trabalho em Altura - TOTAL002.png'],
      isSelecionado: false
    }]
  };

  public detalhesCertificados: DetalhesCertificado = {
    alunos: [{
      nome: 'Alan Fabrício dos Santos Rocha',
      cpf: '000.000.000-00',
      funcao: 'SERV. GERAIS'
    }],
    dataCurso: '27/05/1997',
    cidade: 'Campos Belos',
    cnpj: 'TrenySeg Treinamentos & Documentações',
    horas: 'oito (08)',
    razaoSocial: 'TrenySeg Treinamentos & Documentações',
    assiantura1: '1',
    assiantura2: '1',
    titulo: 'Programa de Treinamento NR 23',
    dataLista: '27 e 28/05/2020',
    duracao: '16h',
    tema: 'Brigada de Incêndio Industrial',
    isDuasAssiantura: false
  };

  public subject = new Subject<DetalhesCertificado>();

  public subject2 = new Subject<IsCertificado>();

  private DetalhesCertificadosSource = new BehaviorSubject(this.detalhesCertificados);
  currentDetalhesCertificados = this.DetalhesCertificadosSource.asObservable();


  private IsCertificadoSource = new BehaviorSubject(this.isCertificados);
  currentIsCertificado = this.IsCertificadoSource.asObservable();

  // tslint:disable-next-line:typedef
  changeDetalhesCertificado(detalhesCertificado: DetalhesCertificado) {
    this.DetalhesCertificadosSource.next(detalhesCertificado);
  }

  // tslint:disable-next-line:typedef
  changeisCertificado(isCertificado: IsCertificado) {
    this.IsCertificadoSource.next(isCertificado);
  }
}
