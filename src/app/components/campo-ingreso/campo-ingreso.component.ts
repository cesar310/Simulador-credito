import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-campo-ingreso',
  imports: [FormsModule, CommonModule],
  templateUrl: './campo-ingreso.component.html',
  styleUrl: './campo-ingreso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampoIngresoComponent {

  @Input() nombre: string = '';
  @Input() valor: number = 0;
  @Output() valorChange = new EventEmitter<number>();
  
  onValorChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valor = Number(inputElement.value);
    this.valorChange.emit(this.valor);
  }
}