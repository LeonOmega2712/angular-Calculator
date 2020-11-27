import { Action, Selector, State, StateContext } from "@ngxs/store";

export interface IRResponse {
  result: number;
}

export class SumaAction {
  public static type = "[number] Suma";
  constructor(public num1: number, public num2: number) {}
}

export class RestaAction {
  public static type = "[number] Resta";
  constructor(public num1: number, public num2: number) {}
}

export class MultiplicacionAction {
  public static type = "[number] Multiplicacion";
  constructor(public num1: number, public num2: number) {}
}

export class DivisionAction {
  public static type = "[number] Division";
  constructor(public num1: number, public num2: number) {}
}

@State<IRResponse>({
  name: "responseState",
  defaults: {
    result: null
  }
})
export class ResponseState {
  constructor() {}

  @Selector()
  static getResult(state: IRResponse) {
    return state.result;
  }

  @Action(SumaAction)
  suma(state: StateContext<IRResponse>, action: SumaAction) {
    var res = action.num1 + action.num2;
    state.setState({
      result: res
    });
  }

  @Action(RestaAction)
  resta(state: StateContext<IRResponse>, action: RestaAction) {
    var res = action.num1 - action.num2;
    state.setState({
      result: res
    });
  }

  @Action(MultiplicacionAction)
  multiplicacion(
    state: StateContext<IRResponse>,
    action: MultiplicacionAction
  ) {
    var res = action.num1 * action.num2;
    state.setState({
      result: res
    });
  }

  @Action(DivisionAction)
  division(state: StateContext<IRResponse>, action: DivisionAction) {
    var res = action.num1 / action.num2;
    state.setState({
      result: res
    });
  }
}
