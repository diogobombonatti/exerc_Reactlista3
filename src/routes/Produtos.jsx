export default function Produtos() {
    
  React.useEffect(() => {
    document.title = "Produtos";
  }, []); // Defina o título da página no useEffect com um array de dependências vazio

  return (
    <>
      <h1>Lista de Produtos</h1>
      <div>
        <table>
          <thead> {/* Use <thead> para cabeçalhos da tabela */}
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th> {/* Corrija a formatação do texto */}
            </tr>
          </thead>
          <tbody> {/* Use <tbody> para o corpo da tabela */}
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
                  <button>Editar</button> {/* Adicione botões para editar/excluir */}
                  <button>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}