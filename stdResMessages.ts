/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | settings, default values
 */

import { Status, STATUS_TEXT } from "https://deno.land/std/http/http_status.ts";

interface ResponseMessage {
    code: string;
    resCode: number;
    resMessage: string,
    message: string;
    value: any;
}

interface MessageParam {
    [key: string]: ResponseMessage;
}

// message options => code, resCode, reMessage, message, value
export const stdResMessages: MessageParam = {
    checkError   : {
        code      : 'paramsError',
        resCode   : Status.NotAcceptable,
        resMessage: STATUS_TEXT.get(Status.NotAcceptable) || 'Not Acceptable',
        message   : 'Parameters checking error',
        value     : '',
    },
    connectError : {
        code      : 'connectionError',
        resCode   : Status.NetworkAuthenticationRequired,
        resMessage: STATUS_TEXT.get(Status.NetworkAuthenticationRequired) || 'Network Auth Required',
        message   : 'Connection error',
        value     : '',
    },
    validateError: {
        code      : 'paramsError',
        resCode   : Status.NotAcceptable,
        resMessage: STATUS_TEXT.get(Status.NotAcceptable) || 'Not Acceptable',
        message   : 'Validation error for inputs parameters',
        value     : '',
    },
    tokenExpired : {
        code      : 'tokenExpired',
        resCode   : Status.Unauthorized,
        resMessage: STATUS_TEXT.get(Status.Unauthorized) || 'Not Authorized',
        message   : 'Unauthorized. Token / Access-key has expired. Please login again',
        value     : '',
    },
    unAuthorized : {
        code      : 'unAuthorized',
        resCode   : Status.Unauthorized,
        resMessage: STATUS_TEXT.get(Status.Unauthorized) || 'Not Authorized',
        message   : 'Unauthorised Action or Task',
        value     : '',
    },
    notFound     : {
        code      : 'notFound',
        resCode   : Status.NotFound,
        resMessage: STATUS_TEXT.get(Status.NotFound) || 'Not Found',
        message   : 'Requested information not found',
        value     : '',
    },
    success      : {
        code      : 'success',
        resCode   : Status.OK,
        resMessage: STATUS_TEXT.get(Status.OK) || 'OK',
        message   : 'Request completed successfully',
        value     : '',
    },
    removeDenied : {
        code      : 'removeDenied',
        resCode   : Status.Unauthorized,
        resMessage: STATUS_TEXT.get(Status.Unauthorized) || 'Not Authorized',
        message   : 'Remove action/task denied/unauthorised',
        value     : '',
    },
    removeError  : {
        code      : 'removeError',
        resCode   : Status.NotModified,
        resMessage: STATUS_TEXT.get(Status.NotModified) || 'Not Modified',
        message   : 'Error removing/deleting information, retry or contact system-admin',
        value     : '',
    },
    removed      : {
        code      : 'removed',
        resCode   : Status.OK,
        resMessage: STATUS_TEXT.get(Status.OK) || 'OK',
        message   : 'Record(s) deleted/removed successfully',
        value     : '',
    },
    subItems     : {
        code      : 'subItems',
        resCode   : Status.NotModified,
        resMessage: STATUS_TEXT.get(Status.NotModified) || 'Not Modified',
        message   : 'Record includes sub-items, which must be removed first',
        value     : '',
    },
    duplicateRec : {
        code      : 'duplicate',
        resCode   : Status.NotModified,
        resMessage: STATUS_TEXT.get(Status.NotModified) || 'Not Modified',
        message   : 'Duplicate record exists',
        value     : '',
    },
    updated      : {
        code      : 'updated',
        resCode   : Status.OK,
        resMessage: STATUS_TEXT.get(Status.OK) || 'OK',
        message   : 'Information update action completed successfully',
        value     : '',
    },
    updateError  : {
        code      : 'updateError',
        resCode   : Status.NotModified,
        resMessage: STATUS_TEXT.get(Status.NotModified) || 'Not Modified',
        message   : 'Error updating information/record(s)',
        value     : '',
    },
    updateDenied : {
        code      : 'updateDenied',
        resCode   : Status.Unauthorized,
        resMessage: STATUS_TEXT.get(Status.Unauthorized) || 'Not Authorized',
        message   : 'Update action/task not authorised',
        value     : '',
    },
    inserted     : {
        code      : 'inserted',
        resCode   : Status.OK,
        resMessage: STATUS_TEXT.get(Status.OK) || 'OK',
        message   : 'Information/record(s) inserted/created successfully',
        value     : '',
    },
    insertError  : {
        code      : 'insertError',
        resCode   : Status.NotModified,
        resMessage: STATUS_TEXT.get(Status.NotModified) || 'Not Modified',
        message   : 'Error inserting/creating new information/record',
        value     : '',
    },
    recExist     : {
        code      : 'exists',
        resCode   : Status.NotModified,
        resMessage: STATUS_TEXT.get(Status.NotModified) || 'Not Modified',
        message   : 'Document/record exists',
        value     : '',
    },
    stdRes       : {
        code      : 'unknown',
        resCode   : Status.UnprocessableEntity,
        resMessage: STATUS_TEXT.get(Status.UnprocessableEntity) || 'Not Processed',
        message   : 'Unspecified response/error message',
        value     : '',
    },
};
