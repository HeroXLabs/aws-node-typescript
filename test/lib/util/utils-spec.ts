import { expect } from 'chai';
import { isEmpty, isBlank, decamelize } from '../../../lib/util/utils';

describe('Utils', () => {
  describe('is empty', () => {
    it('should return true if array is empty', () => {
      expect(isEmpty([])).to.be.true;
    });
  });

  describe('is blank', () => {
    it('should return false if it is an array', () => {
      expect(isBlank([])).to.be.false;
    });

    it('should return true if it is undefined or null', () => {
      expect(isBlank(undefined)).to.be.true;
      expect(isBlank(null)).to.be.true;
    })
  });

  describe('decamelize', () => {
    it('should decamelize string', () => {
      expect(decamelize("appId")).to.eq("app_id");
    });
  });
});