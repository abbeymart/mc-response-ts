/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: mc: check-error testing
 */


import { Status } from "https://deno.land/std/http/http_status.ts";
import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { getResMessage } from "../mod.ts";

let msgType = 'checkError',
    options = {
        value  : '',
        code   : '',
        message: '',
    },
    res = {
        code      : 'paramsError',
        resCode   : Status.NotAcceptable,
        resMessage: 'Not Acceptable',
        value     : '',
        message   : 'Parameters checking error',
    };

Deno.test({
    name: 'should return paramsError code for checkError-message',
    fn  : () => {
        const req = getResMessage(msgType, options);
        assertEquals(res.code, req.code, `response-code should be: ${res.code}`);
        assertNotEquals(req.code, 'unAuthorized');
    }
});

Deno.test({
    name: 'should return NOT_ACCEPTABLE/406 resCode',
    fn  : () => {
        const req = getResMessage(msgType, {});
        assertEquals(res.resCode, req.resCode, `resCode should be: ${res.resCode}`);
        assertEquals(res.resMessage, req.resMessage, `resCode should be: ${res.resMessage}`);
    }
});

Deno.test({
    name: 'should return Parameters checking error message',
    fn  : () => {
        const req = getResMessage(msgType, options);
        assertEquals(res.message, req.message, `message should be: ${res.message}`);
    }
});
