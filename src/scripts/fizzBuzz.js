const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZBUZZ = 'FizzBuzz';
const OK = 'Ok';
const KO = 'Ko';

const isMultipleOfNumber = (number, multiple) => number % multiple === 0;
const isMultiple3 = (number) => isMultipleOfNumber(number, 3);
const isMultiple5 = (number) => isMultipleOfNumber(number, 5);
const isMultiple3AndNot5 = (number) => isMultiple3(number) && !isMultiple5(number);
const isMultiple5AndNot3 = (number) => isMultiple5(number) && !isMultiple3(number);
const isMultiple3And5 = (number) => isMultiple3(number) && isMultiple5(number);

const fillResult = (status, message, num, result) => {
    return {
        status: status,
        message: message,
        data: {
            number: num,
            result: result
        }
    }
};

const isNumericValue = (value) => {
  return typeof value.length !== "undefined"  ? value.length > 0 && !isNaN(Number(value)) : !isNaN(Number(value));
}

const fizzBuzz = (number) => {
    let result;

    if (isNumericValue(number)) {
        if (isMultiple3AndNot5(number)) {
            result = fillResult(OK, 'El número es divisible por 3', number, FIZZ);
        } else if (isMultiple5AndNot3(number)) {
            result = fillResult(OK, 'El número es divisible por 5', number, BUZZ);
        } else if (isMultiple3And5(number)) {
            result = fillResult(OK, 'El número es divisible por 3 y por 5', number, FIZZBUZZ);
        } else {
            result = fillResult(KO, 'El número no es divisible por 3 ni por 5', number, number);
        }
    } else {
        result = fillResult(KO, 'El valor introducino no es un número', Number.NaN, Number.NaN);
    }

    return result;
}

export { fizzBuzz, OK, KO };
