import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';

import { CounterState } from './counter.state';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CounterState]),
    NgxsWebsocketPluginModule.forRoot({
      url: 'wss://echo.websocket.org'
    }),
    NgxsEmitPluginModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
