import { EventEmitter, Injectable } from '@angular/core';
import { IPagoCredito } from '@app/models/interfaces/ipago-credito';
import { FuncionesService } from './funciones.service';

@Injectable({
  providedIn: 'root'
})
export class GraficarService {
  messageEmitter = new EventEmitter<IPagoCredito>();

  constructor(private funcionesService: FuncionesService) { }

  sendMessage(monto: number, tasa: number, plazo: number, tipo: string) {
    const infoCredito = this.funcionesService.calcularCredito(monto, tasa, plazo, tipo);
    this.messageEmitter.emit(infoCredito);
  }
  
}
