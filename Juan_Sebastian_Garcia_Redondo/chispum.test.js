const { describe } = require("yargs");
const chispum = require("./chispum");

describe("chispum", ()=>{
    test("Escribir 1 y mostrar un ok, Esto se cumple si la funcion recibe un 1", () =>{
        const expected = 1;
        const result = chispum(1);
        expect(expected).toBe(result);
    });
});