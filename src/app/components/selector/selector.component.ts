import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorComponent {

  @Input() nombre: string | undefined;
  @Input() opciones: string[] | undefined;
  @Output() seleccion = new EventEmitter<string>();

  onSeleccionar(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.seleccion.emit(selectElement.value);
  }

}
