import authorize from "../lib/util/authorize";
import { UnauthorizedResp, SuccessResp } from '../lib/util/http-resp';

export async function handler(event: any) {
  let { headers, body } = event;

  let res = authorize(headers);

  if(!res.ok) {
    return UnauthorizedResp;
  }

  return SuccessResp({body: body});
}
