import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ParrafoTutorialComponent } from "../parrafo-tutorial/parrafo-tutorial.component";
import { TituloTutorialComponent } from "../titulo-tutorial/titulo-tutorial.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-tutorial',
  imports: [ParrafoTutorialComponent, TituloTutorialComponent, CommonModule],
  templateUrl: './tarjeta-tutorial.component.html',
  styleUrl: './tarjeta-tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetaTutorialComponent {
  @Input() titulo = '';
  @Input() parrafos: string[] = [];
  @Input() subparrafos: string[] = [];
}