import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ConnectWebSocket, SendWebSocketMessage } from '@ngxs/websocket-plugin';
import { Emitter, Emittable } from '@ngxs-labs/emitter';

import { Observable } from 'rxjs';

import { CounterState, CounterStateModel } from './counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  @Select(CounterState)
  public count$: Observable<CounterStateModel>;

  @Emitter(CounterState.modifyValue)
  public modifyValue: Emittable<number>;

  constructor(private store: Store) {}

  onClick(payload: number) {
    this.modifyValue.emit(payload);

    // this.store.dispatch({ type: '[Counter] Modify Value', payload })
    
    // this.store.dispatch(new SendWebSocketMessage({
    //   type: '[Counter] Modify Value',
    //   payload,
    // }));
  }

  ngOnInit() {
    // this.store.dispatch(new ConnectWebSocket());
  }
}
