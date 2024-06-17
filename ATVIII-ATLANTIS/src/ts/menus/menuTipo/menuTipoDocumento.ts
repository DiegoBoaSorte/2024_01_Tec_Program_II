import Menu from "../../interfaces/menu";

export default class MenuTipoDocumento implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Deseja cadastrar outro documento? `)
        console.log(`----------------------`)
        console.log(`| 1 - Registro Geral`)
        console.log(`| 2 - Passaporte`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}