import ComponenteProdutos from '../../Components/Produtos/produtos.js'
import { useState, useEffect} from 'react';
// import { Container, Row, Col } from 'react-bootstrap'

export default function Produtos(){
    
    const[produtos,setProdutos] = useState([]);
    
    useEffect(async () => { // Quando o componente for criado obter a api de forma assincrona. No entando haverá esperas em sequência, quando necessário

    const resposta = await fetch("http://localhost:3000/produtos");
    const dados = await resposta.json();
    
    setProdutos(dados);
        
    }, []);

    return (
        <div>

        {/* <div className="dropdown categorias shadow rounded ">
            <button className="btn btn-transparent btn-lg btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categoria de produtos
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                <h6 className="dropdown header text-center font-weight-bold"><u>FILTRO</u></h6>
                <button className="dropdown-item" type="button" onclick="exibir_todos()">Todos</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" type="button" onclick="exibir_categoria('geladeira')">Geladeiras</button>
                <button className="dropdown-item" type="button" onclick="exibir_categoria('fogão')">Fogões</button>
                <button className="dropdown-item" type="button" onclick="exibir_categoria('microondas')">Microondas</button>
                <button className="dropdown-item" type="button" onclick="exibir_categoria('lava_roupas')">Lavadoura de roupas</button>
                <button className="dropdown-item" type="button" onclick="exibir_categoria('lava_loucas')">Lava-louças</button>
            </div>
        </div> */}  

            <div className="row">

                <div className="col-4">
                    <div className="dropdown categorias ">
                        <button className="btn btn-transparent btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categoria de produtos
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                            <h6 className="dropdown header text-center font-weight-bold"><u>FILTRO</u></h6>
                            <button className="dropdown-item" type="button">Todos</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" type="button">Geladeiras</button>
                            <button className="dropdown-item" type="button">Fogões</button>
                            <button className="dropdown-item" type="button">Microondas</button>
                            <button className="dropdown-item" type="button">Lavadoura de roupas</button>
                            <button className="dropdown-item" type="button">Lava-louças</button>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row">
                    {produtos && produtos.map(item =>
                    <ComponenteProdutos
                    key = {item.idproduto}
                    // categoria = {item.categoria}
                    descrição = {item.descrição}
                    imagem = {item.imagem}
                    preço = {item.preço}
                    preçofinal = {item.preçofinal}
                    />)}
                    </div>
                </div>

            </div>

        </div>
    );
}