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

  constructor(private codeMapper: ErrorCodeMapper) {
  }

  ngOnInit() {
   }

  getCodes() {
    this.codes = this.codeMapper.getCodes();
    console.log('app.getCodes', this.codes);
  }
  
}
