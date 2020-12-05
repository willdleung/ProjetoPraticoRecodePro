import '../Footer/Footer.css';

export default function Footer(){
    
    return (
        <div>
            <footer id="rodape">
                <h4>Formas de pagamento</h4>
                <img class="imgFooter" width="25%" src={require('./imgFooter/formasPagamento.png').default} alt="Formas de pagamento"/>
                <p id="logo_recode">&copy; Recode Pro</p>
            </footer>
        </div>
        
    );

}