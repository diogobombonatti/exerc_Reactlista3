export default function EditarProdutos() {
    document.title ="Editar Produtos";
  
  
    const {id} = useParams();
  
  
    return (
      <>
        <h1>Editar Produtos</h1>
        <p>Produto Selecionado  : {id}</p>
      </>
    )
  }
  
  