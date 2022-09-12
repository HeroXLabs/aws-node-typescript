import { isEmpty } from "./utils";
import * as jwt from "jsonwebtoken";

export const AUTH_SECRET = process.env.AUTH_SECRET || "AUTH_SECRET";

interface AuthorizedInfo {
  id: string
  workspace_id?: string
}

interface AuthorizedHeaders {
  Authorization?: string
  authorization?: string
}

interface AuthorizedResp {
  ok: boolean,
  id?: string
}

export default function authorize(headers: AuthorizedHeaders) : AuthorizedResp {
  let { Authorization, authorization } = headers;
  let _a = Authorization || authorization || "";
  
  if(isEmpty(_a)) {
    return {ok: false};
  }

  let token = _a.substring(7, _a.length);
  let id : string | undefined;

  try {
    let decoded = jwt.verify(token, AUTH_SECRET) as AuthorizedInfo;
    id = decoded.id;
    if(isEmpty(id)) {
      throw "Unauthorized."
    }
  } catch(err) {
    return {ok: false};
  }

  return {ok: true, id};
}