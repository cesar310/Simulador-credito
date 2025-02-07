import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarjeta-informacion',
  imports: [CurrencyPipe],
  templateUrl: './tarjeta-informacion.component.html',
  styleUrl: './tarjeta-informacion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetaInformacionComponent implements OnChanges {
  
  @Input() titulo: string = 'Información';
  @Input() valor: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  
  ngOnChanges(changes: SimpleChanges): void {

    this.cdr.markForCheck();

  }




}