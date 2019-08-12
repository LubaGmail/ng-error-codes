import { ErrorCodes } from "../types/error-codes";

export class ErrorCodeMapper {
  codes: ErrorCodes[];
  code: string;

  constructor() {
    this.loadCodeTable();
    console.log('service.codes', this.codes);
  }

  getCodes() {
    return this.codes;
  }
  
  getUiMsg(apiCode) {
    if (!apiCode) {
      return 'Please ender API Error code';
    }
    const code = this.codes.find(c => c.apiCode == apiCode.trim());
    if (code) {
      return code.uiMsg;
    } else {
      return 'No UI message was found for this API code: ' + 'apiCode';
    }
   
  }

   getUiMsgByHttp(httpCode) {
    if (!httpCode) {
      return 'Please enter HTTP response code';
    }
    const code = this.codes.find(c => c.httpCode == httpCode.trim());
    if (code) {
      return code.uiMsg;
    } else {
      return 'No UI message was found for this HTTP code: ' + 'httpCode';
    }
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
