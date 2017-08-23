import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class SocketService {
  private subject$: Subject<MessageEvent>;
  private url: string;
  public close: Function;
  public getState: Function;

  constructor() {
    this.url = 'http://localhost:3000';
  }

  /**
   *
   * @returns {Subject<MessageEvent>}
   */
  connect(): Subject<MessageEvent> {
    this.subject$ = this.create();
    return this.subject$
  }

  private create(): Subject<MessageEvent> {
    const ws = new WebSocket(this.url);

    const observable$ = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onopen = obs.next.bind(obs);
      ws.onmessage = obs.next.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      ws.onerror = obs.error.bind(obs);
      return ws.close.bind(ws);
    });

    const observer = {
      next: (data: string) => {
        if ( ws.readyState === WebSocket.OPEN ) {
          ws.send(data);
        }
      }
    };

    const getState = () => {
      return ws.readyState;
    };

    this.close = ws.close.bind(ws);
    this.getState = getState.bind(ws);

    return Subject.create(observer, observable$);
  }

}
