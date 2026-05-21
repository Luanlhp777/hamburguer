const prompt = require("prompt-sync")();

let hamburgueria = [];

function exibirMenu() {
    console.log("\n---==| MENU DA HAMBURGUERIA |==---");
    console.log("\n1 - Adicionar");
    console.log("2 - Listar");
    console.log("3 - Atualizar");
    console.log("4 - Deletar");
    console.log("5 - Sair");

}

// FUNÇÃO PARA ADICIONAR
function adicionarHamburguer() {
    const nome = prompt("Nome do hambúrguer: ");

    const preco = prompt("Preço do hambúrguer: ");
    hamburgueria.push({ nome, preco });

    console.log("Hambúrguer adicionado com sucesso!");
}

// LISTAR
function verHamburgueres() {
    if (hamburgueria.length === 0) {
        console.log("Nenhum hambúrguer encontrado.")
        return;
    }
    console.log("\nLista de Hambúrgueres.")

    hamburgueria.forEach((burger, index) => {
        console.log(`${index + 1}. Nome: ${burger.nome}, Preço: ${burger.preco}`)
    });
}

// ATUALIZAR
function atualizarHamburguer() {
    verHamburgueres();
    const index = parseInt(prompt("Escolha um hambúrguer para atualizar: ")) - 1;

    if (index < 0 || index >= hamburgueria.length) {

        console.log("Número inválido");
        return;
    }

    const novoNome = prompt("Novo hambúrguer: ");
    const novoPreco = prompt("Novo preço: ");

    hamburgueria[index] = { nome: novoNome, preco: novoPreco };

    console.log("Hambúrguer atualizado com sucesso! ");
}

// DELETE
function deletarHamburguer() {
    verHamburgueres();
    const index = parseInt(prompt("Escolha um hambúrguer para deletar: ")) - 1;

    if (index < 0 || index >= hamburgueria.length) {

        console.log("Número inválido");
        return;
    }

    hamburgueria.splice(index, 1);
    console.log("Hambúrguer deletado com sucesso! ")

}

function principal() {

    let opcao;

    do {
        exibirMenu();

        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                adicionarHamburguer();
                break;

            case 2:
                verHamburgueres();
                break;

            case 3:
                atualizarHamburguer();
                break;

            case 4:
                deletarHamburguer();
                break;

            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida! ");
        }
    } while (opcao !== 5);
}
principal();