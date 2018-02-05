import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';
import {Config} from '../common/config.model';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  greeting: string = 'Hello welcome! This is my property';
  message: string;
  config: Config;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this.config = this._stateService.config;
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }

  logMessage(m: string): void {
    this._stateService.logMessage(m);
  }
}
