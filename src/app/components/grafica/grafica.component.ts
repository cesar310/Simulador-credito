import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CurrencyPipe, CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { GraficarService } from '@app/services/graficar.service';
import { IPagoCredito } from '@app/models/interfaces/ipago-credito';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraficaComponent implements AfterViewInit {
  chart: any = false;
  infoCredito: IPagoCredito = { amortizacion: [], intereses: [], periodos: [] };
  currencyPipe: CurrencyPipe = new CurrencyPipe('es-CO');
  disponible = false;

  constructor(private graficaService: GraficarService, private cdr: ChangeDetectorRef) {}

  createChart(infoCredito: IPagoCredito) {
      const ctx = document.getElementById('MyChart') as HTMLCanvasElement;
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: infoCredito.periodos,
            datasets: [
              {
                stack: 'Stack 0',
                label: "Capital",
                data: infoCredito.amortizacion,
                backgroundColor: '#3498db' // Color secundario
              },
              {
                stack: 'Stack 0',
                label: "Intereses",
                data: infoCredito.intereses,
                backgroundColor: '#e74c3c' // Color acento
              }
            ]
          },
          options: {
            aspectRatio: 2,
            plugins: {
              title: {
                display: true,
                text: 'Valor de las cuotas de tu crédito',
                font: {
                  size: 18,
                  weight: 'bold'
                },
                color: '#2c3e50'
              },
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    size: 14
                  },
                  color: '#2c3e50'
                }
              }
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Mes',
                  font: {
                    size: 14,
                    weight: 'bold'
                  },
                  color: '#2c3e50' 
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Valor de la cuota',
                  font: {
                    size: 14,
                    weight: 'bold'
                  },
                  color: '#2c3e50'
                }
              }
            }
          }
        });
      }
  }

  removeChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  OnInit() {
    this.graficaService.messageEmitter.subscribe(
      message => {
        this.createChart(message)
    }
    );
  }

  ngAfterViewInit() {
    
    this.graficaService.messageEmitter.subscribe(
      message => {
        this.disponible = true;
        this.cdr.markForCheck();
        this.removeChart();
        this.createChart(message)
        
    }
    );
    
    
    
  }
}