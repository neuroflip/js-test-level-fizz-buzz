import { expect, describe, test } from "@jest/globals";
import { fizzBuzz, OK, KO } from "../src/scripts/fizzBuzz";

describe('FizzBuzz test for multiples of 3 and 5', () => {
    test('returns Fizz when multiple of 3', () => {
        const valor_entrada = 9;
        const respuesta_esperada = {
            status: OK,
            message: 'El número es divisible por 3',
            data: {
                number: 9,
                result: "Fizz"
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    });

    test('returns Buzz when multiple of 5', () => {
        const valor_entrada = 10;
        const respuesta_esperada = {
            status: OK,
            message: 'El número es divisible por 5',
            data: {
                number: 10,
                result: 'Buzz'
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

    test('returns FizzBuzz when multiple of 3 and 5', () => {
        const valor_entrada = 15;
        const respuesta_esperada = {
            status: OK,
            message: 'El número es divisible por 3 y por 5',
            data: {
                number: 15,
                result: 'FizzBuzz'
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

    test('returns number when is not multiple of 3 or 5', () => {
        const valor_entrada = 8;
        const respuesta_esperada = {
            status: KO,
            message: 'El número no es divisible por 3 ni por 5',
            data: {
                number: 8,
                result: 8
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

    test('returns Fizz when is a negative number multiple of 3', () => {
        const valor_entrada = -9;
        const respuesta_esperada = {
            status: OK,
            message: 'El número es divisible por 3',
            data: {
                number: -9,
                result: 'Fizz'
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

    test('returns Buzz when is a negative number multiple of 5', () => {
        const valor_entrada = -10;
        const respuesta_esperada = {
            status: OK,
            message: 'El número es divisible por 5',
            data: {
                number: -10,
                result: 'Buzz'
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

    test('returns FizzBuzz when is a negative number multiple of 3 and 5', () => {
        const valor_entrada = -15;
        const respuesta_esperada = {
            status: OK,
            message: 'El número es divisible por 3 y por 5',
            data: {
                number: -15,
                result: 'FizzBuzz'
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

    test('returns NaN values when is not a numeric value', () => {
        const valor_entrada = 'not a number';
        const respuesta_esperada = {
            status: KO,
            message: 'El valor introducino no es un número',
            data: {
                number: Number.NaN,
                result: Number.NaN
            }}

        const resultado = fizzBuzz(valor_entrada);
    
        expect(typeof resultado.data.number).toBe('number');
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(respuesta_esperada.data.result);
    })

})