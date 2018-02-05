import {Injectable} from '@angular/core';
import {Config} from './config.model';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
  config: Config = {
    name: 'Hello',
    description: 'Description'
  };

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

  logMessage(newMessage: string): void {
    console.log('Logging new message: ', newMessage);
  }
}
