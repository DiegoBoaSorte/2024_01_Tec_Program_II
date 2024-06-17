import Menu from "../interfaces/menu";

export default class MenuEditarDependente implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`****************************`)
    console.log(`| Dependente:  `);
    console.log(`| O que você deseja editar? `);
    console.log(`----------------------`);
    console.log(`| 1 - Nome`);
    console.log(`| 2 - Nome Social`);
    console.log(`| 3 - Data de Nascimento`);
    console.log(`| 4 - Documentos`);
    console.log(`----------------------`);
    console.log(`| 0 - Sair`);
    console.log(`----------------------`);
  }
}
