/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | settings, default values
 */

import NetStatusCode from "./NetStatusCode.ts";

interface ResponseMessage {
    code: string;
    resCode: number | string;
    message: string;
    value: any;
}

interface MessageParam {
    [key: string]: ResponseMessage;
}

// message options => code, resCode, message, value
const resMessage: MessageParam =  {
    checkError: {
        code: 'paramsError',
        resCode: NetStatusCode.NOT_ACCEPTABLE,
        message: 'Parameters checking error',
        value: '',
    },
    connectError: {
        code: 'connectionError',
        resCode: NetStatusCode.NETWORK_AUTHENTICATION_REQUIRED,
        message: 'Connection error',
        value: '',
    },
    validateError: {
        code: 'paramsError',
        resCode: NetStatusCode.NOT_ACCEPTABLE,
        message: 'Validation error for inputs parameters',
        value: '',
    },
    tokenExpired: {
        code: 'tokenExpired',
        resCode: NetStatusCode.UNAUTHORIZED,
        message: 'Unauthorized. Token / Access-key has expired. Please login again',
        value: '',
    },
    unAuthorized: {
        code: 'unAuthorized',
        resCode: NetStatusCode.UNAUTHORIZED,
        message: 'Unauthorised Action or Task',
        value: '',
    },
    notFound: {
        code: 'notFound',
        resCode: NetStatusCode.NOT_FOUND,
        message: 'Requested information not found',
        value: '',
    },
    success: {
        code: 'success',
        resCode: NetStatusCode.OK,
        message: 'Request completed successfully',
        value: '',
    },
    removeDenied: {
        code: 'removeDenied',
        resCode: NetStatusCode.UNAUTHORIZED,
        message: 'Remove action/task denied/unauthorised',
        value: '',
    },
    removeError: {
        code: 'removeError',
        resCode: NetStatusCode.NOT_MODIFIED,
        message: 'Error removing/deleting information, retry or contact system-admin',
        value: '',
    },
    removed: {
        code: 'removed',
        resCode: NetStatusCode.OK,
        message: 'Record(s) deleted/removed successfully',
        value: '',
    },
    subItems: {
        code: 'subItems',
        resCode: NetStatusCode.NOT_MODIFIED,
        message: 'Record includes sub-items, which must be removed first',
        value: '',
    },
    duplicateRec: {
        code: 'duplicate',
        resCode: NetStatusCode.NOT_MODIFIED,
        message: 'Duplicate record exists',
        value: '',
    },
    updated: {
        code: 'updated',
        resCode: NetStatusCode.OK,
        message: 'Information update action completed successfully',
        value: '',
    },
    updateError: {
        code: 'updateError',
        resCode: NetStatusCode.NOT_MODIFIED,
        message: 'Error updating information/record(s)',
        value: '',
    },
    updateDenied: {
        code: 'updateDenied',
        resCode: NetStatusCode.UNAUTHORIZED,
        message: 'Update action/task not authorised',
        value: '',
    },
    inserted: {
        code: 'inserted',
        resCode: NetStatusCode.OK,
        message: 'Information/record(s) inserted/created successfully',
        value: '',
    },
    insertError: {
        code: 'insertError',
        resCode: NetStatusCode.NOT_MODIFIED,
        message: 'Error inserting/creating new information/record',
        value: '',
    },
    recExist: {
        code: 'exists',
        resCode: NetStatusCode.NOT_MODIFIED,
        message: 'Document/record exists',
        value: '',
    },
    stdRes: {
        code: 'unknown',
        resCode: NetStatusCode.UNPROCESSABLE_ENTITY,
        message: 'Unspecified response/error message',
        value: '',
    },
};

export default resMessage;
