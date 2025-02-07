import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-grafica',
  imports: [],
  templateUrl: './no-grafica.component.html',
  styleUrl: './no-grafica.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoGraficaComponent {

  mensaje = 'Configura tu crédito y haz clic en el botón "Actualizar Gráfica" para visualizar la proyección de pagos. También puedes consultar el tutorial haciendo clic en el botón "Ver instrucciones".';

}
