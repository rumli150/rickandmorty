import { ShortenPipe } from "./shorten.pipe";

describe('ShortenPipe', () => {
    const pipe = new ShortenPipe();
  
    it('should shorten', () => {
      expect(pipe.transform('0123456789ABCDEFGHIJ')).toBe('0123456789');
    });
  
    it('should not shorten if not needed', () => {
        expect(pipe.transform('ABC123DEFG')).toBe('ABC123DEFG');
      });
  });