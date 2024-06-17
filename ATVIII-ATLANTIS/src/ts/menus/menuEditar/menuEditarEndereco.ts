import Menu from "../../interfaces/menu";

export default class MenuEditarEndereco implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Endereço: `)
        console.log(`| O que você deseja editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Rua`)
        console.log(`| 2 - Bairro`)
        console.log(`| 3 - Cidade`)
        console.log(`| 4 - Estado`)
        console.log(`| 5 - País`)
        console.log(`| 6 - Código postal`)
        console.log(`----------------------`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}