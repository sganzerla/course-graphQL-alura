import { api, opcoesFetch } from './config'

const urlApi = 'http://localhost:4000';

const listarClientes = () =>
  fetch(urlApi, opcoesFetch('{clientes {id nome cpf }}'))
    .then(resposta => resposta.json())
    .then(dados => dados.data.clientes)

const buscarClientePorId = id =>

  fetch(urlApi, opcoesFetch(
    `
    {
      cliente( id: ${id}){
        nome
        cpf
      }
    }
    `
  ))
  .then(resposta => resposta.json())
  .then(dados => dados.data.cliente)

const adicionarCliente = cliente =>
  fetch(urlApi, opcoesFetch(`
  mutation {
    adicionarCliente(nome: "${cliente.nome}", cpf: "${cliente.cpf}")
    {
      id
      nome
    }
  }
  `))
    .then(resposta => resposta.json())
    .then(dados => dados.data.cliente)


const alterarCliente = (id, cliente) =>
  fetch(urlApi, opcoesFetch(
    `
    mutation {

      atualizarCliente(
        id: ${id},
        nome: "${cliente.nome}",
        cpf: "${cliente.cpf}"
        ){
        nome
      }
    }`
  ))
    .then(resposta => resposta.json())
    .then(dados => dados.data)



const removerCliente = id =>
  api.delete(`/clientes/cliente/${id}`).then(resposta => resposta.data)

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}
