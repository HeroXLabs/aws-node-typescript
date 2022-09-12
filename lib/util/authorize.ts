import { isEmpty } from "./utils";
import * as jwt from "jsonwebtoken";

let SIGN_IN_SECRET = "Nh8NyNPo";

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
  id: string
}

export default function authorize(headers: AuthorizedHeaders) : AuthorizedResp {
  let { Authorization, authorization } = headers;
  let _a = Authorization || authorization || "";
  
  if(isEmpty(_a)) {
    return {ok: false, id: ""};
  }

  let token = _a.substring(7, _a.length);
  let id : string;

  try {
    let decoded = jwt.verify(token, SIGN_IN_SECRET) as AuthorizedInfo;
    id = decoded.id || decoded.workspace_id || "";
    if(isEmpty(id)) {
      throw "Unauthorized."
    }
  } catch(err) {
    return {ok: false, id: ""};
  }

  return {ok: true, id};
}