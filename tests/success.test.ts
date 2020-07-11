/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: mc: success scenarios testing
 */

import { Status } from "https://deno.land/std/http/http_status.ts";
import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { getResMessage } from "../mod.ts";

let msgType = 'success',
    options = {
        value  : ['a', 'b', 'c'],
        code   : '',
        message: '',
    },
    res = {
        code      : 'success',
        resCode   : Status.OK,
        resMessage: 'OK',
        value     : '',
        message   : 'Request completed successfully',
    };

Deno.test({
    name: 'should return success code for success-message',
    fn  : () => {
        const req = getResMessage(msgType, options);
        assertEquals(res.code, req.code, `response-code should be: ${res.code}`);
        assertNotEquals(req.code, 'unAuthorized');
    }
});

Deno.test({
    name: 'should return ok/200 resCode for success-message',
    fn  : () => {
        const req = getResMessage(msgType);
        assertEquals(res.resCode, req.resCode, `resCode should be: ${res.resCode}`);
        assertEquals(res.resMessage, req.resMessage, `resCode should be: ${res.resMessage}`);
    }
});

Deno.test({
    name: 'should return Completed successfully message for success-message',
    fn  : () => {
        const req = getResMessage(msgType, options);
        assertEquals(res.message, req.message, `message should be: ${res.message}`);
    }
});

Deno.test({
    name: 'should return correct default message',
    fn  : () => {
        options = {
            value  : ['a', 'b', 'c'],
            code   : '',
            message: 'Successful',
        }
        const req = getResMessage(msgType, options);
        assertEquals(options.message, req.message, `message should be: ${options.message}`);
    }
});
