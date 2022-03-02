import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Nr10Component} from './nr10/nr10.component';
import {Modelo1Component} from './modelo1/modelo1.component';
import {Nr10Module} from './nr10/nr10.module';
import {Modelo1Module} from './modelo1/modelo1.module';
import { Nr33Component } from './nr33/nr33.component';
import {Nr33Module} from './nr33/nr33.module';
import {Nr18Component} from './nr18/nr18.component';
import {Nr18Module} from './nr18/nr18.module';
import { CertificadoFerramensRotativasComponent } from './certificado-ferramens-rotativas/certificado-ferramens-rotativas.component';
import {CertificadoFerramensRotativasModule} from './certificado-ferramens-rotativas/certificado-ferramens-rotativas.module';
import { CertificadoResgatePrimeirosSocorrosComponent } from './certificado-resgate-primeiros-socorros/certificado-resgate-primeiros-socorros.component';
import { CertificadoDirecaoDefensivaComponent } from './certificado-direcao-defensiva/certificado-direcao-defensiva.component';
import { CertificadoNR5CIPAComponent } from './certificado-nr5-cipa/certificado-nr5-cipa.component';
import { CertificadoNR6EPISComponent } from './certificado-nr6-epis/certificado-nr6-epis.component';
// tslint:disable-next-line:max-line-length
import { CertificadoNR7PrimeirosSocorrosComponent } from './certificado-nr7-primeiros-socorros/certificado-nr7-primeiros-socorros.component';
import {CertificadoResgatePrimeirosSocorrosModule} from './certificado-resgate-primeiros-socorros/certificado-resgate-primeiros-socorros.module';
import {CertificadoDirecaoDefensivaModule} from './certificado-direcao-defensiva/certificado-direcao-defensiva.module';
import {CertificadoNR5CIPAModule} from './certificado-nr5-cipa/certificado-nr5-cipa.module';
import {CertificadoNR6EPISModule} from './certificado-nr6-epis/certificado-nr6-epis.module';
import {CertificadoNR7PrimeirosSocorrosModule} from './certificado-nr7-primeiros-socorros/certificado-nr7-primeiros-socorros.module';
import { CertificadoNR10SEPComponent } from './certificado-nr10-sep/certificado-nr10-sep.component';
import { CertificadoNR10SEPP1Component } from './certificado-nr10-sep/certificado-nr10-sep-p1/certificado-nr10-sep-p1.component';
import { CertificadoNR10SEPP2Component } from './certificado-nr10-sep/certificado-nr10-sep-p2/certificado-nr10-sep-p2.component';
import { CertificadoNR11MovArmCargasComponent } from './certificado-nr11-mov-arm-cargas/certificado-nr11-mov-arm-cargas.component';
import { CertificadoNR11MovArmCargasP1Component } from './certificado-nr11-mov-arm-cargas/certificado-nr11-mov-arm-cargas-p1/certificado-nr11-mov-arm-cargas-p1.component';
import { CertificadoNR11MovArmCargasP2Component } from './certificado-nr11-mov-arm-cargas/certificado-nr11-mov-arm-cargas-p2/certificado-nr11-mov-arm-cargas-p2.component';
import { CertificadoNR11AmarracaoCargaComponent } from './certificado-nr11-amarracao-carga/certificado-nr11-amarracao-carga.component';
import { CertificadoNR11AmarracaoCargaP1Component } from './certificado-nr11-amarracao-carga/certificado-nr11-amarracao-carga-p1/certificado-nr11-amarracao-carga-p1.component';
import { CertificadoNR11AmarracaoCargaP2Component } from './certificado-nr11-amarracao-carga/certificado-nr11-amarracao-carga-p2/certificado-nr11-amarracao-carga-p2.component';
import { CertificadoNR11OpEmpilhadeiraComponent } from './certificado-nr11-op-empilhadeira/certificado-nr11-op-empilhadeira.component';
import { CertificadoNR11OpEmpilhadeiraP1Component } from './certificado-nr11-op-empilhadeira/certificado-nr11-op-empilhadeira-p1/certificado-nr11-op-empilhadeira-p1.component';
import { CertificadoNR11OpEmpilhadeiraP2Component } from './certificado-nr11-op-empilhadeira/certificado-nr11-op-empilhadeira-p2/certificado-nr11-op-empilhadeira-p2.component';
import { CertificadoNR11OpEscavadeiraHidraulicaComponent } from './certificado-nr11-op-escavadeira-hidraulica/certificado-nr11-op-escavadeira-hidraulica.component';
import { CertificadoNR11OpEscavadeiraHidraulicaP1Component } from './certificado-nr11-op-escavadeira-hidraulica/certificado-nr11-op-escavadeira-hidraulica-p1/certificado-nr11-op-escavadeira-hidraulica-p1.component';
import { CertificadoNR11OpEscavadeiraHidraulicaP2Component } from './certificado-nr11-op-escavadeira-hidraulica/certificado-nr11-op-escavadeira-hidraulica-p2/certificado-nr11-op-escavadeira-hidraulica-p2.component';
import { CertificadoNR11OpMiniPaCarregadeiraComponent } from './certificado-nr11-op-mini-pa-carregadeira/certificado-nr11-op-mini-pa-carregadeira.component';
import { CertificadoNR11OpMiniPaCarregadeiraP1Component } from './certificado-nr11-op-mini-pa-carregadeira/certificado-nr11-op-mini-pa-carregadeira-p1/certificado-nr11-op-mini-pa-carregadeira-p1.component';
import { CertificadoNR11OpMiniPaCarregadeiraP2Component } from './certificado-nr11-op-mini-pa-carregadeira/certificado-nr11-op-mini-pa-carregadeira-p2/certificado-nr11-op-mini-pa-carregadeira-p2.component';
import { CertificadoNR11OpMunckComponent } from './certificado-nr11-op-munck/certificado-nr11-op-munck.component';
import { CertificadoNR11OpMunckP1Component } from './certificado-nr11-op-munck/certificado-nr11-op-munck-p1/certificado-nr11-op-munck-p1.component';
import { CertificadoNR11OpMunckP2Component } from './certificado-nr11-op-munck/certificado-nr11-op-munck-p2/certificado-nr11-op-munck-p2.component';
import { CertificadoNR11OpPaCarregadeiraComponent } from './certificado-nr11-op-pa-carregadeira/certificado-nr11-op-pa-carregadeira.component';
import { CertificadoNR11OpPaCarregadeiraP1Component } from './certificado-nr11-op-pa-carregadeira/certificado-nr11-op-pa-carregadeira-p1/certificado-nr11-op-pa-carregadeira-p1.component';
import { CertificadoNR11OpPaCarregadeiraP2Component } from './certificado-nr11-op-pa-carregadeira/certificado-nr11-op-pa-carregadeira-p2/certificado-nr11-op-pa-carregadeira-p2.component';
import { CertificadoNR11OpPrensaEnfardadeiraComponent } from './certificado-nr11-op-prensa-enfardadeira/certificado-nr11-op-prensa-enfardadeira.component';
import { CertificadoNR11OpPrensaEnfardadeiraP1Component } from './certificado-nr11-op-prensa-enfardadeira/certificado-nr11-op-prensa-enfardadeira-p1/certificado-nr11-op-prensa-enfardadeira-p1.component';
import { CertificadoNR11OpPrensaEnfardadeiraP2Component } from './certificado-nr11-op-prensa-enfardadeira/certificado-nr11-op-prensa-enfardadeira-p2/certificado-nr11-op-prensa-enfardadeira-p2.component';
import { CertificadoNR11OpRoloCompactadorComponent } from './certificado-nr11-op-rolo-compactador/certificado-nr11-op-rolo-compactador.component';
import { CertificadoNR11OpRoloCompactadorP1Component } from './certificado-nr11-op-rolo-compactador/certificado-nr11-op-rolo-compactador-p1/certificado-nr11-op-rolo-compactador-p1.component';
import { CertificadoNR11OpRoloCompactadorP2Component } from './certificado-nr11-op-rolo-compactador/certificado-nr11-op-rolo-compactador-p2/certificado-nr11-op-rolo-compactador-p2.component';
import { CertificadoNR11OpTranspaleteiraComponent } from './certificado-nr11-op-transpaleteira/certificado-nr11-op-transpaleteira.component';
import { CertificadoNR11OpTranspaleteiraP1Component } from './certificado-nr11-op-transpaleteira/certificado-nr11-op-transpaleteira-p1/certificado-nr11-op-transpaleteira-p1.component';
import { CertificadoNR11OpTranspaleteiraP2Component } from './certificado-nr11-op-transpaleteira/certificado-nr11-op-transpaleteira-p2/certificado-nr11-op-transpaleteira-p2.component';
import { CertificadoNR11OpTratorAgricolaComponent } from './certificado-nr11-op-trator-agricola/certificado-nr11-op-trator-agricola.component';
import { CertificadoNR11OpTratorAgricolaP1Component } from './certificado-nr11-op-trator-agricola/certificado-nr11-op-trator-agricola-p1/certificado-nr11-op-trator-agricola-p1.component';
import { CertificadoNR11OpTratorAgricolaP2Component } from './certificado-nr11-op-trator-agricola/certificado-nr11-op-trator-agricola-p2/certificado-nr11-op-trator-agricola-p2.component';
import { CertificadoNR11OpTratorEsteiraComponent } from './certificado-nr11-op-trator-esteira/certificado-nr11-op-trator-esteira.component';
import { CertificadoNR11OpTratorEsteiraP1Component } from './certificado-nr11-op-trator-esteira/certificado-nr11-op-trator-esteira-p1/certificado-nr11-op-trator-esteira-p1.component';
import { CertificadoNR11OpTratorEsteiraP2Component } from './certificado-nr11-op-trator-esteira/certificado-nr11-op-trator-esteira-p2/certificado-nr11-op-trator-esteira-p2.component';
import { CertificadoNR11SinalizacaoAmarracaoCargaComponent } from './certificado-nr11-sinalizacao-amarracao-carga/certificado-nr11-sinalizacao-amarracao-carga.component';
import { CertificadoNR11SinalizacaoAmarracaoCargaP1Component } from './certificado-nr11-sinalizacao-amarracao-carga/certificado-nr11-sinalizacao-amarracao-carga-p1/certificado-nr11-sinalizacao-amarracao-carga-p1.component';
import { CertificadoNR11SinalizacaoAmarracaoCargaP2Component } from './certificado-nr11-sinalizacao-amarracao-carga/certificado-nr11-sinalizacao-amarracao-carga-p2/certificado-nr11-sinalizacao-amarracao-carga-p2.component';
import { CertificadoNR12FerramensManuaisComponent } from './certificado-nr12-ferramens-manuais/certificado-nr12-ferramens-manuais.component';
import { CertificadoNR12FerramensManuaisP1Component } from './certificado-nr12-ferramens-manuais/certificado-nr12-ferramens-manuais-p1/certificado-nr12-ferramens-manuais-p1.component';
import { CertificadoNR12FerramensManuaisP2Component } from './certificado-nr12-ferramens-manuais/certificado-nr12-ferramens-manuais-p2/certificado-nr12-ferramens-manuais-p2.component';
import { CertificadoNR12FerramensRotEletropComponent } from './certificado-nr12-ferramens-rot-eletrop/certificado-nr12-ferramens-rot-eletrop.component';
import { CertificadoNR12FerramensRotEletropP1Component } from './certificado-nr12-ferramens-rot-eletrop/certificado-nr12-ferramens-rot-eletrop-p1/certificado-nr12-ferramens-rot-eletrop-p1.component';
import { CertificadoNR12FerramensRotEletropP2Component } from './certificado-nr12-ferramens-rot-eletrop/certificado-nr12-ferramens-rot-eletrop-p2/certificado-nr12-ferramens-rot-eletrop-p2.component';
import { CertificadoNR12NR31OpMotoPodaComponent } from './certificado-nr12-nr31-op-moto-poda/certificado-nr12-nr31-op-moto-poda.component';
import { CertificadoNR12NR31OpMotoPodaP1Component } from './certificado-nr12-nr31-op-moto-poda/certificado-nr12-nr31-op-moto-poda-p1/certificado-nr12-nr31-op-moto-poda-p1.component';
import { CertificadoNR12NR31OpMotoPodaP2Component } from './certificado-nr12-nr31-op-moto-poda/certificado-nr12-nr31-op-moto-poda-p2/certificado-nr12-nr31-op-moto-poda-p2.component';
import { CertificadoNR12NR31OpRocadeiraCostasComponent } from './certificado-nr12-nr31-op-rocadeira-costas/certificado-nr12-nr31-op-rocadeira-costas.component';
import { CertificadoNR12NR31OpRocadeiraCostasP1Component } from './certificado-nr12-nr31-op-rocadeira-costas/certificado-nr12-nr31-op-rocadeira-costas-p1/certificado-nr12-nr31-op-rocadeira-costas-p1.component';
import { CertificadoNR12NR31OpRocadeiraCostasP2Component } from './certificado-nr12-nr31-op-rocadeira-costas/certificado-nr12-nr31-op-rocadeira-costas-p2/certificado-nr12-nr31-op-rocadeira-costas-p2.component';
import { CertificadoNR12ProtMaqEquipamentosComponent } from './certificado-nr12-prot-maq-equipamentos/certificado-nr12-prot-maq-equipamentos.component';
import { CertificadoNR12ProtMaqEquipamentosP1Component } from './certificado-nr12-prot-maq-equipamentos/certificado-nr12-prot-maq-equipamentos-p1/certificado-nr12-prot-maq-equipamentos-p1.component';
import { CertificadoNR12ProtMaqEquipamentosP2Component } from './certificado-nr12-prot-maq-equipamentos/certificado-nr12-prot-maq-equipamentos-p2/certificado-nr12-prot-maq-equipamentos-p2.component';
import { CertificadoNR12NR31SegOpMaqAgricolasComponent } from './certificado-nr12-nr31-seg-op-maq-agricolas/certificado-nr12-nr31-seg-op-maq-agricolas.component';
import { CertificadoNR12NR31SegOpMaqAgricolasP1Component } from './certificado-nr12-nr31-seg-op-maq-agricolas/certificado-nr12-nr31-seg-op-maq-agricolas-p1/certificado-nr12-nr31-seg-op-maq-agricolas-p1.component';
import { CertificadoNR12NR31SegOpMaqAgricolasP2Component } from './certificado-nr12-nr31-seg-op-maq-agricolas/certificado-nr12-nr31-seg-op-maq-agricolas-p2/certificado-nr12-nr31-seg-op-maq-agricolas-p2.component';
import { CertificadoNR17ErgonomiaComponent } from './certificado-nr17-ergonomia/certificado-nr17-ergonomia.component';
import { CertificadoNR17ErgonomiaP1Component } from './certificado-nr17-ergonomia/certificado-nr17-ergonomia-p1/certificado-nr17-ergonomia-p1.component';
import { CertificadoNR17ErgonomiaP2Component } from './certificado-nr17-ergonomia/certificado-nr17-ergonomia-p2/certificado-nr17-ergonomia-p2.component';
import { CertificadoNR18MontAndaimesComponent } from './certificado-nr18-mont-andaimes/certificado-nr18-mont-andaimes.component';
import { CertificadoNR18MontAndaimesP1Component } from './certificado-nr18-mont-andaimes/certificado-nr18-mont-andaimes-p1/certificado-nr18-mont-andaimes-p1.component';
import { CertificadoNR18MontAndaimesP2Component } from './certificado-nr18-mont-andaimes/certificado-nr18-mont-andaimes-p2/certificado-nr18-mont-andaimes-p2.component';
import { CertificadoNR18OpPTAComponent } from './certificado-nr18-op-pta/certificado-nr18-op-pta.component';
import { CertificadoNR18OpPTAP1Component } from './certificado-nr18-op-pta/certificado-nr18-op-pta-p1/certificado-nr18-op-pta-p1.component';
import { CertificadoNR18OpPTAP2Component } from './certificado-nr18-op-pta/certificado-nr18-op-pta-p2/certificado-nr18-op-pta-p2.component';
import { CertificadoNR23CombateIncendioComponent } from './certificado-nr23-combate-incendio/certificado-nr23-combate-incendio.component';
import { CertificadoNR23CombateIncendioP1Component } from './certificado-nr23-combate-incendio/certificado-nr23-combate-incendio-p1/certificado-nr23-combate-incendio-p1.component';
import { CertificadoNR23CombateIncendioP2Component } from './certificado-nr23-combate-incendio/certificado-nr23-combate-incendio-p2/certificado-nr23-combate-incendio-p2.component';
import { CertificadoNR26NR36ProdutosQuimicosComponent } from './certificado-nr26-nr36-produtos-quimicos/certificado-nr26-nr36-produtos-quimicos.component';
import { CertificadoNR26NR36ProdutosQuimicosP1Component } from './certificado-nr26-nr36-produtos-quimicos/certificado-nr26-nr36-produtos-quimicos-p1/certificado-nr26-nr36-produtos-quimicos-p1.component';
import { CertificadoNR26NR36ProdutosQuimicosP2Component } from './certificado-nr26-nr36-produtos-quimicos/certificado-nr26-nr36-produtos-quimicos-p2/certificado-nr26-nr36-produtos-quimicos-p2.component';
import { CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent } from './certificado-nr31-manip-agrot-gasolina/certificado-nr31-manip-agrot-pulverizador-costal-gasolina.component';
import { CertificadoNR34EspConfinadoTOTALComponent } from './certificado-nr34-esp-confinado-total/certificado-nr34-esp-confinado-total.component';
import { CertificadoNR34EspConfinadoTOTALP1Component } from './certificado-nr34-esp-confinado-total/certificado-nr34-esp-confinado-total-p1/certificado-nr34-esp-confinado-total-p1.component';
import { CertificadoNR34EspConfinadoTOTALP2Component } from './certificado-nr34-esp-confinado-total/certificado-nr34-esp-confinado-total-p2/certificado-nr34-esp-confinado-total-p2.component';
import { CertificadoNR34MaqRotativasComponent } from './certificado-nr34-maq-rotativas/certificado-nr34-maq-rotativas.component';
import { CertificadoNR34MaqRotativasP1Component } from './certificado-nr34-maq-rotativas/certificado-nr34-maq-rotativas-p1/certificado-nr34-maq-rotativas-p1.component';
import { CertificadoNR34MaqRotativasP2Component } from './certificado-nr34-maq-rotativas/certificado-nr34-maq-rotativas-p2/certificado-nr34-maq-rotativas-p2.component';
import { CertificadoNR34TrabQuenteComponent } from './certificado-nr34-trab-quente/certificado-nr34-trab-quente.component';
import { CertificadoNR34TrabQuenteP1Component } from './certificado-nr34-trab-quente/certificado-nr34-trab-quente-p1/certificado-nr34-trab-quente-p1.component';
import { CertificadoNR34TrabQuenteP2Component } from './certificado-nr34-trab-quente/certificado-nr34-trab-quente-p2/certificado-nr34-trab-quente-p2.component';
import { CertificadoNR35LinhaVidaComponent } from './certificado-nr35-linha-vida/certificado-nr35-linha-vida.component';
import { CertificadoNR35LinhaVidaP1Component } from './certificado-nr35-linha-vida/certificado-nr35-linha-vida-p1/certificado-nr35-linha-vida-p1.component';
import { CertificadoNR35LinhaVidaP2Component } from './certificado-nr35-linha-vida/certificado-nr35-linha-vida-p2/certificado-nr35-linha-vida-p2.component';
import { CertificadoNR35TaludesComponent } from './certificado-nr35-taludes/certificado-nr35-taludes.component';
import { CertificadoNR35TaludesP1Component } from './certificado-nr35-taludes/certificado-nr35-taludes-p1/certificado-nr35-taludes-p1.component';
import { CertificadoNR35TaludesP2Component } from './certificado-nr35-taludes/certificado-nr35-taludes-p2/certificado-nr35-taludes-p2.component';
import { CertificadoNR35TrabAlturaComponent } from './certificado-nr35-trab-altura/certificado-nr35-trab-altura.component';
import { CertificadoNR35TrabAlturaP1Component } from './certificado-nr35-trab-altura/certificado-nr35-trab-altura-p1/certificado-nr35-trab-altura-p1.component';
import { CertificadoNR35TrabAlturaP2Component } from './certificado-nr35-trab-altura/certificado-nr35-trab-altura-p2/certificado-nr35-trab-altura-p2.component';
import { CetificadoNR23BrigadaIncendioIComponent } from './cetificado-nr23-brigada-incendio-i/cetificado-nr23-brigada-incendio-i.component';
import { CetificadoNR23BrigadaIncendioIP1Component } from './cetificado-nr23-brigada-incendio-i/cetificado-nr23-brigada-incendio-i-p1/cetificado-nr23-brigada-incendio-i-p1.component';
import { CetificadoNR23BrigadaIncendioIP2Component } from './cetificado-nr23-brigada-incendio-i/cetificado-nr23-brigada-incendio-i-p2/cetificado-nr23-brigada-incendio-i-p2.component';
import { CertificadoNR23BrigadadeIncendioComponent } from './certificado-nr23-brigadade-incendio/certificado-nr23-brigadade-incendio.component';
import { CertificadoNR23BrigadadeIncendioP1Component } from './certificado-nr23-brigadade-incendio/certificado-nr23-brigadade-incendio-p1/certificado-nr23-brigadade-incendio-p1.component';
import { CertificadoNR23BrigadadeIncendioP2Component } from './certificado-nr23-brigadade-incendio/certificado-nr23-brigadade-incendio-p2/certificado-nr23-brigadade-incendio-p2.component';
import { CertificadoNR33SupervisorEspConfinadoComponent } from './certificado-nr33-supervisor-esp-confinado/certificado-nr33-supervisor-esp-confinado.component';
import { CertificadoNR33SupervisorEspConfinadoP1Component } from './certificado-nr33-supervisor-esp-confinado/certificado-nr33-supervisor-esp-confinado-p1/certificado-nr33-supervisor-esp-confinado-p1.component';
import { CertificadoNR33SupervisorEspConfinadoP2Component } from './certificado-nr33-supervisor-esp-confinado/certificado-nr33-supervisor-esp-confinado-p2/certificado-nr33-supervisor-esp-confinado-p2.component';
import { CertificadoRAC01ValeComponent } from './certificado-rac01-vale/certificado-rac01-vale.component';
import { CertificadoRAC01ValeP1Component } from './certificado-rac01-vale/certificado-rac01-vale-p1/certificado-rac01-vale-p1.component';
import { CertificadoRAC02ValeComponent } from './certificado-rac02-vale/certificado-rac02-vale.component';
import { CertificadoRAC02ValeP1Component } from './certificado-rac02-vale/certificado-rac02-vale-p1/certificado-rac02-vale-p1.component';
import { CertificadoNR34TrabQuenteTOTALComponent } from './certificado-nr34-trab-quente-total/certificado-nr34-trab-quente-total.component';
import { CertificadoNR34TrabQuenteTOTALP1Component } from './certificado-nr34-trab-quente-total/certificado-nr34-trab-quente-total-p1/certificado-nr34-trab-quente-total-p1.component';
import { CertificadoNR34TrabQuenteTOTALP2Component } from './certificado-nr34-trab-quente-total/certificado-nr34-trab-quente-total-p2/certificado-nr34-trab-quente-total-p2.component';
import { CertificadoNR35TrabalhoAlturaTOTALComponent } from './certificado-nr35-trabalho-altura-total/certificado-nr35-trabalho-altura-total.component';
import { CertificadoNR35TrabalhoAlturaTOTALP1Component } from './certificado-nr35-trabalho-altura-total/certificado-nr35-trabalho-altura-total-p1/certificado-nr35-trabalho-altura-total-p1.component';
import { CertificadoNR35TrabalhoAlturaTOTALP2Component } from './certificado-nr35-trabalho-altura-total/certificado-nr35-trabalho-altura-total-p2/certificado-nr35-trabalho-altura-total-p2.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [Modelo1Component, Nr10Component, Nr33Component, Nr18Component, CertificadoFerramensRotativasComponent, CertificadoResgatePrimeirosSocorrosComponent, CertificadoDirecaoDefensivaComponent, CertificadoNR5CIPAComponent, CertificadoNR6EPISComponent, CertificadoNR7PrimeirosSocorrosComponent, CertificadoNR10SEPComponent, CertificadoNR10SEPP1Component, CertificadoNR10SEPP2Component, CertificadoNR11MovArmCargasComponent, CertificadoNR11MovArmCargasP1Component, CertificadoNR11MovArmCargasP2Component, CertificadoNR11AmarracaoCargaComponent, CertificadoNR11AmarracaoCargaP1Component, CertificadoNR11AmarracaoCargaP2Component, CertificadoNR11OpEmpilhadeiraComponent, CertificadoNR11OpEmpilhadeiraP1Component, CertificadoNR11OpEmpilhadeiraP2Component, CertificadoNR11OpEscavadeiraHidraulicaComponent, CertificadoNR11OpEscavadeiraHidraulicaP1Component, CertificadoNR11OpEscavadeiraHidraulicaP2Component, CertificadoNR11OpMiniPaCarregadeiraComponent, CertificadoNR11OpMiniPaCarregadeiraP1Component, CertificadoNR11OpMiniPaCarregadeiraP2Component, CertificadoNR11OpMunckComponent, CertificadoNR11OpMunckP1Component, CertificadoNR11OpMunckP2Component, CertificadoNR11OpPaCarregadeiraComponent, CertificadoNR11OpPaCarregadeiraP1Component, CertificadoNR11OpPaCarregadeiraP2Component, CertificadoNR11OpPrensaEnfardadeiraComponent, CertificadoNR11OpPrensaEnfardadeiraP1Component, CertificadoNR11OpPrensaEnfardadeiraP2Component, CertificadoNR11OpRoloCompactadorComponent, CertificadoNR11OpRoloCompactadorP1Component, CertificadoNR11OpRoloCompactadorP2Component, CertificadoNR11OpTranspaleteiraComponent, CertificadoNR11OpTranspaleteiraP1Component, CertificadoNR11OpTranspaleteiraP2Component, CertificadoNR11OpTratorAgricolaComponent, CertificadoNR11OpTratorAgricolaP1Component, CertificadoNR11OpTratorAgricolaP2Component, CertificadoNR11OpTratorEsteiraComponent, CertificadoNR11OpTratorEsteiraP1Component, CertificadoNR11OpTratorEsteiraP2Component, CertificadoNR11SinalizacaoAmarracaoCargaComponent, CertificadoNR11SinalizacaoAmarracaoCargaP1Component, CertificadoNR11SinalizacaoAmarracaoCargaP2Component, CertificadoNR12FerramensManuaisComponent, CertificadoNR12FerramensManuaisP1Component, CertificadoNR12FerramensManuaisP2Component, CertificadoNR12FerramensRotEletropComponent, CertificadoNR12FerramensRotEletropP1Component, CertificadoNR12FerramensRotEletropP2Component, CertificadoNR12NR31OpMotoPodaComponent, CertificadoNR12NR31OpMotoPodaP1Component, CertificadoNR12NR31OpMotoPodaP2Component, CertificadoNR12NR31OpRocadeiraCostasComponent, CertificadoNR12NR31OpRocadeiraCostasP1Component, CertificadoNR12NR31OpRocadeiraCostasP2Component, CertificadoNR12ProtMaqEquipamentosComponent, CertificadoNR12ProtMaqEquipamentosP1Component, CertificadoNR12ProtMaqEquipamentosP2Component, CertificadoNR12NR31SegOpMaqAgricolasComponent, CertificadoNR12NR31SegOpMaqAgricolasP1Component, CertificadoNR12NR31SegOpMaqAgricolasP2Component, CertificadoNR17ErgonomiaComponent, CertificadoNR17ErgonomiaP1Component, CertificadoNR17ErgonomiaP2Component, CertificadoNR18MontAndaimesComponent, CertificadoNR18MontAndaimesP1Component, CertificadoNR18MontAndaimesP2Component, CertificadoNR18OpPTAComponent, CertificadoNR18OpPTAP1Component, CertificadoNR18OpPTAP2Component, CertificadoNR23CombateIncendioComponent, CertificadoNR23CombateIncendioP1Component, CertificadoNR23CombateIncendioP2Component, CertificadoNR26NR36ProdutosQuimicosComponent, CertificadoNR26NR36ProdutosQuimicosP1Component, CertificadoNR26NR36ProdutosQuimicosP2Component, CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent, CertificadoNR34EspConfinadoTOTALComponent, CertificadoNR34EspConfinadoTOTALP1Component, CertificadoNR34EspConfinadoTOTALP2Component, CertificadoNR34MaqRotativasComponent, CertificadoNR34MaqRotativasP1Component, CertificadoNR34MaqRotativasP2Component, CertificadoNR34TrabQuenteComponent, CertificadoNR34TrabQuenteP1Component, CertificadoNR34TrabQuenteP2Component, CertificadoNR35LinhaVidaComponent, CertificadoNR35LinhaVidaP1Component, CertificadoNR35LinhaVidaP2Component, CertificadoNR35TaludesComponent, CertificadoNR35TaludesP1Component, CertificadoNR35TaludesP2Component, CertificadoNR35TrabAlturaComponent, CertificadoNR35TrabAlturaP1Component, CertificadoNR35TrabAlturaP2Component, CetificadoNR23BrigadaIncendioIComponent, CetificadoNR23BrigadaIncendioIP1Component, CetificadoNR23BrigadaIncendioIP2Component, CertificadoNR23BrigadadeIncendioComponent, CertificadoNR23BrigadadeIncendioP1Component, CertificadoNR23BrigadadeIncendioP2Component, CertificadoNR33SupervisorEspConfinadoComponent, CertificadoNR33SupervisorEspConfinadoP1Component, CertificadoNR33SupervisorEspConfinadoP2Component, CertificadoRAC01ValeComponent, CertificadoRAC01ValeP1Component, CertificadoRAC02ValeComponent, CertificadoRAC02ValeP1Component, CertificadoNR34TrabQuenteTOTALComponent, CertificadoNR34TrabQuenteTOTALP1Component, CertificadoNR34TrabQuenteTOTALP2Component, CertificadoNR35TrabalhoAlturaTOTALComponent, CertificadoNR35TrabalhoAlturaTOTALP1Component, CertificadoNR35TrabalhoAlturaTOTALP2Component],
  exports: [
    Modelo1Component,
    Nr10Component,
    Nr33Component,
    Nr18Component,
    CertificadoFerramensRotativasComponent,
    CertificadoResgatePrimeirosSocorrosComponent,
    CertificadoDirecaoDefensivaComponent,
    CertificadoNR5CIPAComponent,
    CertificadoNR6EPISComponent,
    CertificadoNR7PrimeirosSocorrosComponent,
    CertificadoNR10SEPComponent,
    CertificadoNR11MovArmCargasComponent,
    CertificadoNR11AmarracaoCargaComponent,
    CertificadoNR11OpEmpilhadeiraComponent,
    CertificadoNR11OpEscavadeiraHidraulicaComponent,
    CertificadoNR11OpMiniPaCarregadeiraComponent,
    CertificadoNR11OpMunckComponent,
    CertificadoNR11OpPaCarregadeiraComponent,
    CertificadoNR11OpPrensaEnfardadeiraComponent,
    CertificadoNR11OpRoloCompactadorComponent,
    CertificadoNR11OpTranspaleteiraComponent,
    CertificadoNR11OpTratorAgricolaComponent,
    CertificadoNR11OpTratorEsteiraComponent,
    CertificadoNR11SinalizacaoAmarracaoCargaComponent,
    CertificadoNR12FerramensManuaisComponent,
    CertificadoNR12FerramensRotEletropComponent,
    CertificadoNR12NR31OpMotoPodaComponent,
    CertificadoNR12NR31OpRocadeiraCostasComponent,
    CertificadoNR12ProtMaqEquipamentosComponent,
    CertificadoNR12NR31SegOpMaqAgricolasComponent,
    CertificadoNR17ErgonomiaP1Component,
    CertificadoNR17ErgonomiaComponent,
    CertificadoNR18MontAndaimesComponent,
    CertificadoNR18OpPTAComponent,
    CertificadoNR23CombateIncendioComponent,
    CertificadoNR26NR36ProdutosQuimicosComponent,
    CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent,
    CertificadoNR34EspConfinadoTOTALComponent,
    CertificadoNR34MaqRotativasComponent,
    CertificadoNR34TrabQuenteComponent,
    CertificadoNR35LinhaVidaComponent,
    CertificadoNR35TaludesComponent,
    CertificadoNR35TrabAlturaComponent,
    CetificadoNR23BrigadaIncendioIComponent,
    CertificadoNR23BrigadadeIncendioComponent,
    CertificadoNR33SupervisorEspConfinadoComponent,
    CertificadoRAC01ValeComponent,
    CertificadoRAC02ValeComponent,
    CertificadoNR34TrabQuenteTOTALComponent,
    CertificadoNR35TrabalhoAlturaTOTALComponent
  ],
  imports: [
    CommonModule,
    Modelo1Module,
    Nr10Module,
    Nr18Module,
    Nr33Module,
    CertificadoFerramensRotativasModule,
    CertificadoResgatePrimeirosSocorrosModule,
    CertificadoDirecaoDefensivaModule,
    CertificadoNR5CIPAModule,
    CertificadoNR6EPISModule,
    CertificadoNR7PrimeirosSocorrosModule
  ]
})
export class ModelosModule { }
