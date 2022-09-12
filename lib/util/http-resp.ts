export const httpResp = (statusCode: number, body: any) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(body)
  }
}

export const InternalServerErrorResp = httpResp(500, {message: "Internal Server Error."});
export const UnauthorizedResp = httpResp(401, {message: "Unauthorized."});
export const InvalidParamsResp = httpResp(422, {message: "Invalid params."});
export function InvalidParamResp(param: string) : any {
  return httpResp(422, {message: `Invalid ${param}`});
}

export function SuccessResp(body: any) : any {
  return httpResp(200, body);
}

export function NotFoundResp() : any {
  return httpResp(404, {message: "Record not found"});
}

export function ErrorTextResp(error: string) : any {
  return httpResp(422, {
    error
  });
}