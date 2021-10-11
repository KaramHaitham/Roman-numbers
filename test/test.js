const { expect } = require('chai');


/**
 * create a set of roman numbers 1 -> I - ok
 * create a set of roman numbers 2 -> II - ok
 * create a set of roman numbers 3 -> III - ok
 * create a set of roman numbers 4 -> IV - ok
 * create a set of roman numbers 5 -> V
 * create a set of roman numbers 6,7,8 -> VI,VII,VIII
 * create a set of roman numbers 9,10 -> IX, X 
 */


function convert(num) {
  if(num == 4) return 'IV';

  if(num <= 3) {
    let result = '';
    for (let i = 0 ; i < num ; i++) { 
      result += 'I' 
    }
    return result;
  }

  let result = 'V';
  for (let i = 5 ; i < num ; i++) { 
    result += 'I' 
  }
  return result;
     
}


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

