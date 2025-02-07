import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TituloComponent } from "../titulo/titulo.component";
import { BotonComponent } from "../boton/boton.component";
import { TarjetaTutorialComponent } from "../tarjeta-tutorial/tarjeta-tutorial.component";

@Component({
  selector: 'app-tutorial',
  imports: [TituloComponent, BotonComponent, TarjetaTutorialComponent],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent {

  rutaBotonSimulador = '';
  titulo = 'Instrucciones para el simulador de crédito';
  textoBotonSimulador = 'Ir al simulador';

  parrafosIngreso = [
    'Ingresa el monto del crédito que deseas solicitar.',
    'Selecciona el tipo de tasa (EA: Efectiva Anual, NA: Nominal Anual, MV: Mes Vencido).',
    'Ingresa el valor de la tasa según el tipo seleccionado.',
    'Define el plazo en meses para tu crédito.'
  ];

  parrafosVisualizacion = [
    'Haz clic en el botón "Actualizar Gráfica" para ver los resultados.',
    'La gráfica mostrará, mes a mes, el valor de tus cuotas divididas en capital e intereses.',
    'En la parte inferior encontrarás tres tarjetas informativas con:'
  ];

  subparrafosVisualizacion = [
    'El valor de tu cuota mensual',
    'El monto total a pagar durante el crédito',
    'El total de intereses a pagar'
  ];

  parrafosInterpretacion = [
    'Las barras azules representan el capital amortizado cada mes.',
    'Las barras rojas representan los intereses pagados cada mes.',
    'La suma de ambas barras es el valor total de tu cuota mensual.'
  ];
}