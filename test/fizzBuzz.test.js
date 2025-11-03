import { expect, describe, test } from "@jest/globals";
import { fizzBuzz } from "../src/scripts/fizzBuzz";

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('returns Fizz when multiple of 3', () => {
            let valor_entrada = 9;
            let respuesta_esperada = {
                status: "Ok",
                message: "El número es divisible por 3",
                data: {
                    number: 9,
                    result: "Fizz"
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.number).toBe("number");
            expect(resultado).toEqual(respuesta_esperada);
            expect(resultado.data.result).toBe(respuesta_esperada.data.result);
        });

        test('returns Buzz when multiple of 5', () => {
            let valor_entrada = 10;
            let respuesta_esperada = {
                status: "Ok",
                message: "El número es divisible por 5",
                data: {
                    number: 10,
                    result: "Buzz"
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.number).toBe("number");
            expect(resultado).toEqual(respuesta_esperada);
            expect(resultado.data.result).toBe(respuesta_esperada.data.result);
        })

        test('returns FizzBuzz when multiple of 3 and 5', () => {
            let valor_entrada = 15;
            let respuesta_esperada = {
                status: "Ok",
                message: "El número es divisible por 3 y por 5",
                data: {
                    number: 15,
                    result: "FizzBuzz"
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.number).toBe("number");
            expect(resultado).toEqual(respuesta_esperada);
            expect(resultado.data.result).toBe(respuesta_esperada.data.result);
        })

        test('returns number when is not multiple of 3 and 5', () => {
            let valor_entrada = 8;
            let respuesta_esperada = {
                status: "Ok",
                message: "El número no es divisible por 3 ni por 5",
                data: {
                    number: 8,
                    result: 8
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.number).toBe("number");
            expect(resultado).toEqual(respuesta_esperada);
            expect(resultado.data.result).toBe(respuesta_esperada.data.result);
        })

        test('returns error message when is not a number', () => {
            let valor_entrada = 'not a number';
            let respuesta_esperada = {
                status: "Ko",
                message: "El valor de entrada no es un numero",
                data: {
                    number: Number.NaN,
                    result: Number.NaN
                }}

            let resultado = fizzBuzz(valor_entrada);

            expect(resultado.data.number).toBeNaN();
            expect(resultado).toEqual(respuesta_esperada);
            expect(resultado.data.result).toBe(respuesta_esperada.data.result);
        })

        test('returns error message when is an empty string', () => {
            let valor_entrada = '';
            let respuesta_esperada = {
                status: "Ko",
                message: "El valor de entrada no es un numero",
                data: {
                    number: Number.NaN,
                    result: Number.NaN
                }}

        })
    }
)