const { expect } = require('chai');


/**
 * create a set of roman numbers 1 -> I
 * create a set of roman numbers 2 -> II
 * create a set of roman numbers 3 -> III
 * create a set of roman numbers 4 -> IV
 * create a set of roman numbers 5 -> V
 * create a set of roman numbers 6,7,8 -> VI,VII,VIII
 * create a set of roman numbers 9,10 -> IX, X 
 */


function convert(num) {   
  if(num == 1) {
    return 'I';
  } else {
    return 'II';
  }
}

it('Returns the char I for number 1', function() {
    //given
    const numberOneRoman = 'I';
    
    //when
    const result = convert(1);
    
    //then
    expect(result).to.equal(numberOneRoman);
})

it('Returns the char II for number 2', function() {
    //given
    const numberTwoRoman = 'II';
    
    //when
    const result = convert(2);
    
    //then
    expect(result).to.equal(numberTwoRoman);
})
