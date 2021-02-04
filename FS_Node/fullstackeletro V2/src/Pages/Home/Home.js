export default function Home(){
    
    return (
        <div>
            <div class="jumbotron mx-4">
                <h1 class="display-4">Seja bem vinda(o)!</h1>
                <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
                <hr />
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="O que você procura?" aria-label="procurar" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-info" type="button" id="button-addon2">Pesquisar</button>
                </div>
                </div>
            </div>
        </div>
    );
}