import { CounterInJsonPipe } from './counter-in-json.pipe';

describe('CounterInJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new CounterInJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
