const cliente = {
nome:'Nome aqui', sobrenome:'Sobrenome aqui', cpf:'CPF aqui', cidade:'Cidade aqui'
}

console.log(cliente)
console.log('------------')

console.log(cliente.nome)
console.log(cliente.sobrenome)
console.log(cliente.cpf)
console.log(cliente.cidade)
console.log('------------')

function cadastrarCliente(nome, sobrenome, cpf, cidade){
    console.log(`Cliente: ${nome} ${sobrenome}`)
    console.log(`Portador do CPF: ${cpf}`)
    console.log(`Cidade: ${cidade}`)
}

cadastrarCliente('Tháinno', 'Santana', 1564815354, 'Vitória')
console.log('------------')
cadastrarCliente('João', 'Silva', 138413658, 'São Paulo')
console.log('------------')
cadastrarCliente('Alberto', [], 514681451, 'Macapá')