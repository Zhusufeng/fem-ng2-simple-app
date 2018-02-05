import {Injectable} from '@angular/core';

@Injectable()
export class StateService {
	private _message = 'Hello Message';

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
