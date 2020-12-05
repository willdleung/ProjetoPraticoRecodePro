import './produtos.css';
// import { Container, Row, Col} from 'react-bootstrap'

export default function ComponenteProdutos(props){

    return(  

    <figure className={props.categoria + "produto col-lg-3 col=md-4 col-sm-6 col-xs-12 mr-auto"}>
    <img src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" /> 

    <div className="figura">  
        <p className="">
            {props.categoria}
        </p>
        <p className="nome-prod">
            {props.descrição}
        </p>
        <p className="preco-prod">
            R$ {props.preço}
        </p>
        <p className="precofinal-prod">
            R$ {props.preçofinal}
        </p>   
    </div>

    </figure>

    );
}