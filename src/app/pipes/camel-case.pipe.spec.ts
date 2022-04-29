import { CamelCasePipe } from "./camel-case.pipe";

describe('Pipe: Camelcase', () => {
  let sut: CamelCasePipe;

  beforeEach(() => {
    sut = new CamelCasePipe();
  });

  it('should lowercase a single word', () => {
    const output = sut.transform('hALLo');
    expect(output).toBe('hallo');
  });

  it('should camelcase a line of text', () => {
    const output = sut.transform('hallo daar even iets testen');
    expect(output).toBe('halloDaarEvenIetsTesten');
  });

  it('should handle multiple spaces gracefully', () => {
    const output = sut.transform('hALLo   Daar   het gaat          goed');
    expect(output).toBe('halloDaarHetGaatGoed');
  });

  it('should replace an undefined value with an empty string', () => {
    const output = sut.transform(undefined);
    expect(output).toBe('')
  });
});