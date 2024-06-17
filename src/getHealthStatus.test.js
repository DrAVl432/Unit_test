import getHealthStatus from './getHealthStatus';

test('should return healthy for health above 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should return wounded for health between 15 and 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 30 });
  expect(result).toBe('wounded');
});

test('should return critical for health below 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});