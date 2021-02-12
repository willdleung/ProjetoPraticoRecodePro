export default function Home(){
    
    return (
        <div>
            <div className="jumbotron mx-4">
                <h1 className="display-4">Seja bem vinda(o)!</h1>
                <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
                <hr />
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="O que você procura?" aria-label="procurar" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-info" type="button" id="button-addon2">Pesquisar</button>
                </div>
                </div>
            </div>
        </div>
    );
}