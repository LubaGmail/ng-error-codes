import { Component, OnInit } from '@angular/core';
import { ErrorCodeMapper } from './services/error-code-mapper.service';
import { ErrorCodes } from './types/error-codes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  codes: ErrorCodes[];
  apiCode: string;
  httpCode: string;
  apiMsg: string;
  httpMsg: string;

  constructor(private codeMapper: ErrorCodeMapper) {
  }

  ngOnInit() {
  }

  getAllCodes() {
    this.codes = this.codeMapper.getCodes();
  }

  onApiErrorCode() {
    console.log('apiCode', this.apiCode);
    if (this.apiCode) {
      this.apiCode.trim();
      this.apiMsg = this.codeMapper.getUiMsg(this.apiCode);
    } 
    
    this.apiCode = '';
  }

  onHttpCode() {
    if (this.httpCode) {
      this.httpCode.trim();
      this.httpMsg = this.codeMapper.getUiMsgByHttp(this.httpCode);
    }
    
    this.httpCode = '';
  }

}
