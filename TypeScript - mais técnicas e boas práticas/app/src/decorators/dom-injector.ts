export function domInjector(seletor: string) {

  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );

    let elemento: HTMLElement;

    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }

      return elemento;
    };

    // Altero o prototype da classe, adicionando um atributo com o nome da propertyKey (nome do atributo) e gerando para ele um  método get.
    // Esse get, por sua vez, recebe o valor do getter que criamos acima.
    // O getter, busca um elemento no DOM.
    Object.defineProperty(
      target,
      propertyKey,
      { get: getter }
    );
    
  };
}
