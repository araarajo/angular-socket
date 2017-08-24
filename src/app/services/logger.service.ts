import { Injectable } from '@angular/core';

enum LOG {
  ERROR,
  WARN,
  INFO,
  DEBUG
}

@Injectable()
export class LoggerService {
  public error: Function;
  public warn: Function;
  public info: Function;
  public log: Function;
  private _level: LOG;

  constructor() {
    this._level = LOG.DEBUG;

    this.error = function (msg) {
    };
    this.warn = function (msg) {
    };
    this.info = function (msg) {
    };
    this.log = function (msg) {
    };

    if ( !(typeof console === 'undefined') ) {
      this.setLogFunc();
    }
  }

  private setLogFunc() {
    switch ( this._level ) {
      case LOG.DEBUG:
        this.log = console.log.bind(console);
      case LOG.INFO:
        this.info = console.info.bind(console);
      case LOG.WARN:
        this.warn = console.warn.bind(console);
      case LOG.ERROR:
        this.error = console.error.bind(console);
        break;
      default:
        this.warn('Not expected value');
    }
  }
}
