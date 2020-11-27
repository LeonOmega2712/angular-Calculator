import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import {
  SumaAction,
  RestaAction,
  MultiplicacionAction,
  DivisionAction,
  ResponseState
} from "../modelo/operador.redux";
@Injectable()
export class OperadorService {
  constructor(private store: Store) {}
  sumar(num1: number, num2: number) {
    this.store.dispatch(new SumaAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
  restar(num1: number, num2: number) {
    this.store.dispatch(new RestaAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
  multiplicar(num1: number, num2: number) {
    this.store.dispatch(new MultiplicacionAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
  dividir(num1: number, num2: number) {
    this.store.dispatch(new DivisionAction(num1, num2));
    return this.store.selectSnapshot(ResponseState.getResult);
  }
}
