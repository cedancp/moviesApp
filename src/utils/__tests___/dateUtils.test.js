import {getYearFromDate} from '../dateUtils';

describe('Date utils', () => {
  it('should return year of the date', () => {
    const date = '1988-04-14';
    const expectedYear = 1988;

    const resultYear = getYearFromDate(date);

    expect(resultYear).toBe(expectedYear);
  });
});
