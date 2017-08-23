import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: string;
  data: any;
}

@Injectable()
export class BroadcastEventService {
  private eventBus$: Subject<BroadcastEvent>;

  constructor() {
    this.eventBus$ = new Subject<BroadcastEvent>();
  }

  broadcast(key: string, data: any) {
    this.eventBus$.next({key, data});
  }

  on<BrodcastEvent>(key: string): Observable<BroadcastEvent> {
    return this.eventBus$.asObservable()
      .filter(event => event.key === key)
      .map(event => <BroadcastEvent>event.data);
  }

}
