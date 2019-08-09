import { ErrorCodes } from "../types/error-codes";

export class ErrorCodeMapper {
  codes: ErrorCodes[];

  constructor() {
    this.loadCodeTable();
    console.log('service.codes', this.codes);
  }

  getCodes() {
    return this.codes;
  }

  getCode(apiCode) {
    const code = this.codes.find(c => c.apiCode == apiCode);
    return code;
  }

  getUiMsg(apiCode) {
    const code = this.codes.find(c => c.apiCode == apiCode);
    return code.uiMsg;
  }

  getCodeByHttp(httpCode) {
    const code = this.codes.find(c => c.httpCode == httpCode);
    return code;
  }

  getUiMsgByHttp(httpCode) {
    const code = this.codes.find(c => c.httpCode == httpCode);
    return code.uiMsg;
  }

  loadCodeTable() {
    this.codes = [
      {
        apiCode: 'E0000001',
        httpCode: '400',
        color: 'red',
        uiMsg: 'API validation failed.'
      }
      ,
      {
        apiCode: 'E0000002',
        httpCode: '400',
        color: 'red',
        uiMsg: 'The request was not valid.'
      }
      ,
      {
        apiCode: 'E0000003',
        httpCode: '400',
        color: 'red',
        uiMsg: 'The request body was not well-formed.'
      }
      ,
      {
        apiCode: 'E0000004',
        httpCode: '401',
        color: 'red',
        uiMsg: 'Authentication failed.'
      }
      ,
      {
        apiCode: 'E0000005',
        httpCode: '403',
        color: 'red',
        uiMsg: 'Invalid session.'
      }
      ,
      {
        apiCode: 'E0000006',
        httpCode: '403',
        color: 'red',
        uiMsg: 'You do not have permission to perform the requested action.'
      }
      ,
      {
        apiCode: 'E0000007',
        httpCode: '404',
        color: 'blue',
        uiMsg: 'Not found.'
      }
      ,

    ];
  }
}
