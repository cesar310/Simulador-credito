import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TituloComponent } from "../titulo/titulo.component";
import { OpcionesComponent } from "../opciones/opciones.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { GraficaComponent } from '../grafica/grafica.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { CommonModule } from '@angular/common';
import { NoGraficaComponent } from "../no-grafica/no-grafica.component";

@Component({
  selector: 'app-main-page',
  imports: [
    TituloComponent,
    OpcionesComponent,
    GraficaComponent,
    InformacionComponent,
    MatGridListModule,
    CommonModule,
    NoGraficaComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  titulo = 'Simulador de crédito';

  mostrarGrafica = false;

  mostrar(value: boolean): void {
    this.mostrarGrafica = true;
  }

}
