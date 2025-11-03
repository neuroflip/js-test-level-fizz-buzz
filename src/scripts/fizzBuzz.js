/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 

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
  return !isNaN(Number(value));
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
            result = fillResult(OK, 'El número no es divisible por 3 ni por 5', number, number);
        }
    } else {
        result = fillResult(KO, 'El valor de entrada no es un numero', Number.NaN, Number.NaN);
    }

    return result;
}

export { fizzBuzz, OK, KO };
