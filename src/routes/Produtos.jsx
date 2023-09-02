import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para criar links de navegação
import ListaProdutos from './ListaProdutos';

export default function Produtos() {
  useEffect(() => {
    document.title = "Produtos";
  }, []);

  // Suponho que você já tenha definido a variável 'produtos' em algum lugar do seu código
  const produtos = ListaProdutos;

  return (
    <>
      <h1>Lista de Produtos</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>
                  <img src={item.img} alt={item.desc} />
                </td>
                <td>{item.preco}</td>
                <td>
                  {/* Use o componente Link para criar um link para a página de edição */}
                  <Link to={`/editar/produtos/${item.id}`}>Editar</Link>
                  <Link to={`/excluir/produtos/${item.id}`}>Excluir</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
