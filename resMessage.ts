/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | utility functions
 */

import resMessage from './resMessages.ts';

interface ResponseMessage {
    code: string;
    resCode: number | string;
    message: string;
    value: any;
}

interface ResponseMessageOptions {
    code?: string;
    resCode?: number | string;
    message?: string;
    value?: any;
}

function msgFunc(code: string, resCode: string | number, msg: string, value: any): ResponseMessage {
    return {
        code: code,
        resCode: resCode,
        value: value,
        message: msg,
    };
}

export default {
    getResMessage(msgType: string = '', options: ResponseMessageOptions): ResponseMessage {
        let value: any = '',
            code: string = '',
            resCode: string | number = '',
            message: string = '';

        if (msgType && resMessage[msgType]) {
            code = resMessage[msgType].code;
            value = options && options.value ? options.value : resMessage[msgType].value;
            resCode = options && options.resCode ? options.resCode : resMessage[msgType].resCode;
            message = options && options.message ? options.message : resMessage[msgType].message;
        } else if (msgType && resMessage[msgType] === undefined) {
            code = msgType;
            value = options && options.value ? options.value : resMessage['stdRes'].value;
            resCode = options && options.resCode ? options.resCode : resMessage['stdRes'].resCode;
            message = options && options.message ? options.message : resMessage['stdRes'].message;
        } else {
            // resMsgParams for default response
            value = options && options.value ? options.value : resMessage['stdRes'].value;
            code = options && options.code ? options.code : resMessage['stdRes'].code;
            resCode = options && options.resCode ? options.resCode : resMessage['stdRes'].resCode;
            message = options && options.message ? options.message : resMessage['stdRes'].message;
        }
        return msgFunc(code, resCode, message, value);
    },
};
