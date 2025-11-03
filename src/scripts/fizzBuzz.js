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
const OK = 'OK';
const KO = 'KO';

const isMultipleOfNumber = (number, multiple) => number % multiple === 0;
const isMultiple3 = (number) => isMultipleOfNumber(number, 3);
const isMultiple5 = (number) => isMultipleOfNumber(number, 5);
const isMultiple3AndNot5 = (number) => isMultiple3(number) && !isMultiple5(number);
const isMultiple5AndNot3 = (number) => isMultiple5(number) && !isMultiple3(number);
const isMultiple3And5 = (number) => isMultiple3(number) && isMultiple5(number);

const fillResult = (status, message, number, result) => ({
    status: status,
    message: message,
    data: {
        number: number,
        result: result
    }
});

const isNumericValue = (value) => {
  return !isNaN(Number(value));
}

const getResult = (number) => {
    let result; 

    if (isNumericValue(number)) {
        if (isMultiple3AndNot5(number)) {
        result = fillResult(OK, '', number, FIZZ);
        } else if (isMultiple5AndNot3(number)) {
        result = fillResult(OK, '', number, BUZZ);
        } else if (isMultiple3And5(number)) {
        result = fillResult(OK, '', number, FIZZBUZZ);
        } else {
        result = fillResult(OK, '', number, number);
        }
    } else {
        result = fillResult(KO, 'The input value is not numeric', 0, '');
    }

    return result;
}

export { getResult, OK, KO };
