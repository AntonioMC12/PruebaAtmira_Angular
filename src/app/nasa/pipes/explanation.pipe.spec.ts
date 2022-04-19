import { ExplanationPipe } from './explanation.pipe';

describe('ExplanationPipe', () => {
  it('create an instance', () => {
    const pipe = new ExplanationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the first 100 characters of the explanation', () => {
    const explanation = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu';
    const pipe = new ExplanationPipe();
    expect(pipe.transform(explanation)).toEqual('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m...');
  });
});
