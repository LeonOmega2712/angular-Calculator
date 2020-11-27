import { Component } from "@angular/core";
import { ResultadoComponent } from "../resultado/resultado.component";
import { OperadorService } from "../servicio/operador.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  num1;
  num2;
  resultado;
  operacion;

  constructor(private opereitor: OperadorService) {}

  sumatela(num1, num2) {
    this.operacion = `de sumar ${num1} + ${num2}`;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    this.resultado = this.opereitor.sumar(num1, num2);
  }

  sumar(num1, num2) {
    this.operacion = `de sumar ${num1} + ${num2}`;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    this.resultado = num1 + num2;
  }

  restar(num1, num2) {
    this.operacion = `de restar ${num1} - ${num2}`;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    this.resultado = this.opereitor.restar(num1, num2);
  }

  multiplicar(num1, num2) {
    this.operacion = `de multiplicar ${num1} × ${num2}`;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    this.resultado = this.opereitor.multiplicar(num1, num2);
  }

  dividir(num1, num2) {
    this.operacion = `de dividir ${num1} ÷ ${num2}`;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    this.resultado = this.opereitor.dividir(num1, num2);
  }
}
