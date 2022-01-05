import { State, StateContext } from '@ngxs/store';
import { Receiver, EmitterAction } from '@ngxs-labs/emitter';

export interface CounterStateModel {
  value: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    value: 0
  }
})
export class CounterState {
  @Receiver({ type: '[Counter] Modify Value' })
  static modifyValue(
    { getState, patchState }: StateContext<CounterStateModel>,
    { payload }: EmitterAction<number>
  ) {
    console.log(payload);

    patchState({
      value: getState().value + payload
    });
  }
}
