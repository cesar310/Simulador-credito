import { Injectable } from '@angular/core';
import { IPagoCredito } from '@app/models/interfaces/ipago-credito';
import { IInformacionCredito } from '@app/models/interfaces/iinformacion-credito';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }

  convertirTasaEnMV(tasa: number, tipo: string): number {
    tasa /= 100;
    switch (tipo) {
      case "EA":
        return Math.pow(1 + tasa, 1 / 12) - 1;
      case "NA":
        return tasa/12;
    }
    return tasa;
  }

  calcularCredito(monto: number, tasa: number, plazo: number, tipo: string): IPagoCredito {
    tasa = this.convertirTasaEnMV(tasa, tipo);
    let amortizacion: number[] = [];
    let intereses: number[] = [];
    let cuota = monto * (tasa / (1 - Math.pow(1 + tasa, -plazo)));
    let saldo = monto;
    for (let i = 0; i < plazo; i++) {
      let interes = saldo * tasa;
      let abono = cuota - interes;
      saldo -= abono;
      amortizacion.push(abono);
      intereses.push(interes);
    }
    let periodos = Array.from({ length: plazo }, (_, i) => i + 1);
    return { amortizacion, intereses, periodos };
  }

  informacionCredito(monto: number, tasa: number, plazo: number, tipo: string): IInformacionCredito {
    tasa = this.convertirTasaEnMV(tasa, tipo);
    let cuota = monto * (tasa / (1 - Math.pow(1 + tasa, -plazo)));
    let totalAPagar = cuota * plazo;
    let totalIntereses = cuota * plazo - monto;
    return { cuota, totalAPagar, totalIntereses };
  }
}
