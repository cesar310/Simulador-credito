import { EventEmitter, Injectable } from '@angular/core';
import { IInformacionCredito } from '@app/models/interfaces/iinformacion-credito';
import { FuncionesService } from './funciones.service';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  messageEmitter = new EventEmitter<IInformacionCredito>();

  constructor(private funcionesService: FuncionesService) { }

  sendMessage(monto: number, tasa: number, plazo: number, tipo: string) {
    const infoCredito = this.funcionesService.informacionCredito(monto, tasa, plazo, tipo);
    this.messageEmitter.emit(infoCredito);
  }
  
}
