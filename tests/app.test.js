const { calcularInteresSimple } = require('../app');

describe('Pruebas de Lógica de Negocio - Módulo Financiero', () => {

    test('Debería calcular correctamente el interés simple', () => {
        // Si p=1000, i=0.1 (10%), t=1 año -> Interés = 100
        expect(calcularInteresSimple(1000, 0.1, 1)).toBe(100);
    });

    test('Debería retornar 0 si los valores son negativos', () => {
        expect(calcularInteresSimple(-100, 0.1, 1)).toBe(0);
    });

    test('Debería funcionar con tasas de interés decimales pequeñas', () => {
        expect(calcularInteresSimple(5000, 0.05, 2)).toBe(500);
    });

});