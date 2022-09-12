import { expect } from 'chai';
import authorize, { AUTH_SECRET } from '../../../lib/util/authorize';
import * as jwt from "jsonwebtoken";

describe('Authorize', () => {
  it('should return ok and id', () => {
    let token = jwt.sign({ id: '1' }, AUTH_SECRET);

    expect(authorize({
      Authorization: "Bearer " + token
    })).to.deep.eq({
      id: "1",
      ok: true
    });
  });

  describe('Unauthorized', () => {
    it('should return false when Authorization is empty', () => {
      expect(authorize({
        Authorization: ""
      })).to.deep.eq({
        ok: false
      });
    });

    it('should return false when Authorization content cannot be decoded', () => {
      expect(authorize({
        Authorization: "Basic xxx"
      })).to.deep.eq({
        ok: false
      });
    });
  });
});