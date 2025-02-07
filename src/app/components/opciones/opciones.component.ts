import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { SelectorComponent } from "../selector/selector.component";
import { CampoIngresoComponent } from "../campo-ingreso/campo-ingreso.component";
import { GraficarService } from '@app/services/graficar.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { InformeService } from '@app/services/informe.service';
import { send } from 'process';
import { BotonComponent } from "../boton/boton.component";

@Component({
  selector: 'app-opciones',
  imports: [SelectorComponent, CampoIngresoComponent, FormsModule, BotonComponent], // Add FormsModule to imports
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpcionesComponent {

  @Output() mostrarGrafica = new EventEmitter<boolean>();

  // Ingreso monto del credito
  nombreMontoCredito = 'Monto (en pesos)';
  montoDefault: number = 10000000;

  // Selector tipo de tasa
  selectorTasaNombre = "Tipo de tasa";
  tasasDisponibles: string[] = ['EA', 'NA', 'MV'];
  tipoTasaSeleccionada: string = this.tasasDisponibles[0];

  // Ingreso tasa del credito
  nombreTasaCredito: string = 'Tasa (%)';
  tasaDefault: number = 10;

  // Ingreso plazo del credito
  nombrePlazoCredito: string = 'Plazo (meses)';
  plazoDefault: number = 12;

  // Atributos del boton para ir al tutorial
  textoBotonTutorial = 'Ver instrucciones';
  rutaBotonTutorial = '/tutorial';

  constructor(private graficarService: GraficarService, private informeService: InformeService) { }

  sendMessageGrafica() {
    this.graficarService.sendMessage(this.montoDefault, this.tasaDefault, this.plazoDefault, this.tipoTasaSeleccionada);
  }

  sendMessageInforme() {
    this.informeService.sendMessage(this.montoDefault, this.tasaDefault, this.plazoDefault, this.tipoTasaSeleccionada);
  }

  mostrarClick(): void {
    this.mostrarGrafica.emit(true);
    this.sendMessageGrafica();
    this.sendMessageInforme();
  }

  onSeleccion(opcionSeleccionada: string): void {
    this.tipoTasaSeleccionada = opcionSeleccionada;
  }

  onInresoMonto(monto: number): void {
    this.montoDefault = monto;
  }

  onIngresoTasa(tasa: number): void {
    this.tasaDefault = tasa;
  }

  onIngresoPlazo(plazo: number): void {
    this.plazoDefault = plazo;
  }

  ngOnInit() {
    this.sendMessageGrafica()
    this.sendMessageInforme()
  }
}
