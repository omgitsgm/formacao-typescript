export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        // Salvo o comportamento do método original
        const metodoOriginal = descriptor.value;

        // Modifico o comportamento do método
        descriptor.value = function (...args: Array<any>) { //...args: Array<any> -> permite um valor qualquer de parâmetros
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args); // Apply aplica um contexto e passa parâmetros ao método
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`)
            retorno;
        };

        return descriptor;
    }
}