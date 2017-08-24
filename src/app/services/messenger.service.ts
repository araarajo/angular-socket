import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SocketService } from './socket.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import { BroadcastEventService } from './broadcast-event.service';
import { LoggerService } from './logger.service';

@Injectable()
export class MessengerService {
  private subject$: Subject<any>;

  constructor(private socketService: SocketService,
              private broadcastEvent: BroadcastEventService,
              private logger: LoggerService) {
  }

  public connect() {
    this.subject$ = this.socketService.connect();
    this.subject$
      .subscribe(res => {
        this.handleResponse(res);
      }, err => {
        this.handleError(err);
      }, () => {
        this.handleClose();
      });
  }

  public closeSocket() {
    if ( this.subject$ !== null ) {
      this.subject$.complete();
      this.subject$ = null;
      this.socketService.close();
    }
  }

  public getState(): number {
    return this.socketService.getState();
  }

  public sendMessage(message: string) {
    this.logger.info('send', message);
    this.subject$.next(message);
  }

  private handleOpenResp() {
  }

  private handleMessageResp(data: any) {
    this.broadcastEvent.broadcast('message', data);
  }

  private handleResponse(resp: MessageEvent) {
    this.logger.info('resp', resp);
    switch ( resp.type ) {
      case 'open':
        this.handleOpenResp();
        break;
      case 'message':
        this.handleMessageResp(resp.data);
        break;
      default:
        console.log('Not expected type');
    }

  }

  private handleError(error) {

  }

  private handleClose() {

  }
}
