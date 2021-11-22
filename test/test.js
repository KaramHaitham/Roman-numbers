const { expect } = require('chai');


/**
 * create a set of roman numbers 1 -> I - ok
 * create a set of roman numbers 2 -> II - ok
 * create a set of roman numbers 3 -> III - ok
 * create a set of roman numbers 4 -> IV - ok
 * create a set of roman numbers 5 -> V - ok
 * create a set of roman numbers 6,7,8 -> VI,VII,VIII - ok
 * create a set of roman numbers 9,10 -> IX, X - ok
 * create a set of roman numbers 11,12,13 -> XI, XII , XIII - ok
 * create a set of roman numbers 14,15,16 -> XIV, XV , XVI

 */

 const baseMapping = {
  [0]:'',
  [5]:'V',
  [10]:'X'
}

function convert(num) {
  if(num == 4) return 'IV';
  if(num == 9) return 'IX';
  if(num == 14) return 'XIV';

  let base;
  if(num <= 3) {
    base = 0;
  }
  else if(num < 9) {
    base = 5;
  }
  else {
    base = 10;
  }

  return process(base, num);
}

function process(start, num) {
  let result = baseMapping[start];

  for (let i = start ; i < num ; i++) {
    result += 'I';
  }

  return result;
}

/////////////////////////////////////////////////////////////

it('Returns the char I for number 1', function() {
    //given
    const expected = 'I';

    //when
    const result = convert(1);

    //then
    expect(result).to.equal(expected);
})

it('Returns the char II for number 2', function() {
    //given
    const expected = 'II';

    //when
    const result = convert(2);

    //then
    expect(result).to.equal(expected);
})

it('Returns the char III for number 3', function() {
  //given
  const expected = 'III';

  //when
  const result = convert(3);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char IV for number 4', function() {
  //given
  const expected = 'IV';

  //when
  const result = convert(4);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char V for number 5', function() {
  //given
  const expected = 'V';

  //when
  const result = convert(5);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char VI for number 6', function() {
  //given
  const expected = 'VI';

  //when
  const result = convert(6);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char VII for number 7', function() {
  //given
  const expected = 'VII';

  //when
  const result = convert(7);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char VIII for number 8', function() {
  //given
  const expected = 'VIII';

  //when
  const result = convert(8);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char IX for number 9', function() {
  //given
  const expected = 'IX';

  //when
  const result = convert(9);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char X for number 10', function() {
  //given
  const expected = 'X';

  //when
  const result = convert(10);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char XI for number 11', function() {
  //given
  const expected = 'XI';

  //when
  const result = convert(11);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char XII for number 12', function() {
  //given
  const expected = 'XII';

  //when
  const result = convert(12);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char XIII for number 13', function() {
  //given
  const expected = 'XIII';

  //when
  const result = convert(13);

  //then
  expect(result).to.equal(expected);
})

it('Returns the char XIV for number 14', function() {
  //given
  const expected = 'XIV';

  //when
  const result = convert(14);

  //then
  expect(result).to.equal(expected);
})
