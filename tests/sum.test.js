const sum = require('./sum');

jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  });

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4);
});