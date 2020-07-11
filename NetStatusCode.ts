/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-06-25 | @Updated: 2020-06-25
 * @Company: mConnect.biz | @License: MIT
 * @Description: HTTP Status Codes
 */

interface StatusCode {
    [key: string]: string | number;
}

// TODO: add all HTTP Status codes (re: netCodes.txt)
const NetStatusCode: StatusCode = {
    "CONTINUE": 100,
    "NOT_ACCEPTABLE": 406,
    "NETWORK_AUTHENTICATION_REQUIRED": 407,
    "UNAUTHORIZED": 401,
    "NOT_FOUND": 404,
    "OK": 200,
    "NOT_MODIFIED": 304,
    "UNPROCESSABLE_ENTITY": 422,
    "INTERNAL_SERVER_ERROR": 500,
};

export default NetStatusCode;
