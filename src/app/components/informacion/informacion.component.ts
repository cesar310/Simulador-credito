import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TarjetaInformacionComponent } from "../tarjeta-informacion/tarjeta-informacion.component";
import { InformeService } from '@app/services/informe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-informacion',
  imports: [TarjetaInformacionComponent, FormsModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionComponent implements OnInit {

  constructor(private informeService: InformeService, private cdr: ChangeDetectorRef) { }

  cuota = 0;
  totalIntereses = 0;
  totalAPagar = 0;


  updateValues(cuota: number, totalIntereses: number, totalAPagar: number) {
    this.cuota = cuota;
    this.totalIntereses = totalIntereses;
    this.totalAPagar = totalAPagar;
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.informeService.messageEmitter.subscribe((informacion) => {
      this.updateValues(informacion.cuota, informacion.totalIntereses, informacion.totalAPagar);
    });
  }

}
