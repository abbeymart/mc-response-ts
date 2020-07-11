/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | utility functions
 */

import { stdResMessages } from "./mod.ts";

interface ResponseMessage {
    code: string;
    resCode: number;
    resMessage: string;
    message: string;
    value: any;
}

interface ResponseMessageOptions {
    code?: string;
    resCode?: number;
    resMessage?: string;
    message?: string;
    value?: any;
}

function msgFunc(code: string, resCode: number, resMessage: string, msg: string, value: any): ResponseMessage {
    return {
        code      : code,
        resCode   : resCode,
        resMessage: resMessage,
        value     : value,
        message   : msg,
    };
}

export function getResMessage(msgType: string = '', options?: ResponseMessageOptions): ResponseMessage {
    let value: any,
        code: string,
        resCode: number,
        resMessage: string,
        message: string;

    if (msgType && stdResMessages[msgType]) {
        code = stdResMessages[msgType].code;
        value = options && options.value ? options.value : stdResMessages[msgType].value;
        resCode = options && options.resCode ? options.resCode : stdResMessages[msgType].resCode;
        resMessage = options && options.resMessage ? options.resMessage : stdResMessages[msgType].resMessage;
        message = options && options.message ? options.message : stdResMessages[msgType].message;
    } else if (msgType && (!stdResMessages[msgType] || Object.keys(stdResMessages[msgType]).length < 1)) {
        code = msgType;
        value = options && options.value ? options.value : stdResMessages['stdRes'].value;
        resCode = options && options.resCode ? options.resCode : stdResMessages['stdRes'].resCode;
        resMessage = options && options.resMessage ? options.resMessage : stdResMessages['stdRes'].resMessage;
        message = options && options.message ? options.message : stdResMessages['stdRes'].message;
    } else {
        // use stdResMessages default response
        value = options && options.value ? options.value : stdResMessages['stdRes'].value;
        code = options && options.code ? options.code : stdResMessages['stdRes'].code;
        resCode = options && options.resCode ? options.resCode : stdResMessages['stdRes'].resCode;
        resMessage = options && options.resMessage ? options.resMessage : stdResMessages['stdRes'].resMessage;
        message = options && options.message ? options.message : stdResMessages['stdRes'].message;
    }
    return msgFunc(code, resCode, resMessage, message, value);
}
