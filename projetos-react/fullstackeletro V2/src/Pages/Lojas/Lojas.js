export default function Lojas(){
    
    return (
        <div class="container-fluid text-center">
            <table class="table table-bordered table-hover table-responsive-sm text-center mt-4">
                <thead class="thead-light">
                    <tr>
                        <th class="table-info" scope="col">Estado</th>
                        <th class="table-info" scope="col">Rio de Janeiro</th>
                        <th class="table-info" scope="col">São Paulo</th>
                        <th class="table-info" scope="col">Santa Catarina</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Endereço</th>
                    <td>Avenida Presidente Vargas, 5000</td>
                    <td>Avenidade Paulista, 985</td>
                    <td>Rua Major &Aacute; vila, 370</td>
                </tr>
                <tr>
                    <th scope="row">Complemento</th>
                    <td>10 &ordm; andar</td>
                    <td>3 &ordm; andar</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Bairro</th>
                    <td>Centro</td>
                    <td>Jardins</td>
                    <td>Vila Mariana</td>
                </tr>
                <tr>
                    <th scope="row">Contato</th>
                    <td>(21) 3333-3333</td>
                    <td>(11) 4444-4444</td>
                    <td>(47) 5555-5555</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}