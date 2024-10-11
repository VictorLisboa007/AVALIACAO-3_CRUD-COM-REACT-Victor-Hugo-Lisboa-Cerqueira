import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from "react";
import NavBarra from '../components/NavBarra';

const url = "http://localhost:5000/produtos"

const Produto = () => {

  const [produtos, setProdutos] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const prod = await res.json()
        setProdutos(prod)
      } catch (error) {
          console.log(error.message)
      }
    }
    fetchData()
  }, [])
  return (
    <div style={{backgroundColor: 'lightgreen'}}>
    <NavBarra/>
      <Container>
        <h1>Lista de Produtos</h1>
        <div className="d-grid col-2 gap-2">
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nome}</td>
              <td>{prod.categoria}</td>
              <td>{prod.preco}</td>
              <td>
              <ButtonGroup size='sm'>
                <Button variant="danger" onClick={async () => {
                  const res = await fetch(`http://localhost:5000/produtos/${prod.id}`,{
                    method: "DELETE",
                    headers: {"Content-Type":"application/json"}
                })
                const produtoRemovido = await res.json()
                alert(`Produto ${produtoRemovido.nome} foi excluido com sucesso`)
              
              
              
              }}
                
                >Excluir</Button>
              </ButtonGroup>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Produto