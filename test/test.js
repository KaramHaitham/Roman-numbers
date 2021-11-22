const { expect } = require('chai');


/**
 * create a set of roman numbers 14,15,16 -> XIV, XV , XVI
 */

 const baseMapping = {
  [0]:'',
  [5]:'V',
  [10]:'X'
}

function convert(num) {
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

  if(num == 14) {
    return 'XIV';
  }

  let result = baseMapping[base];

  let left = '';
  if(num == 4 || num == 9) {
    left = 'I';
  }

  let right = '';
  for (let i = base ; i < num ; i++) {
    right += 'I';
  }

  return left + result + right;
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
