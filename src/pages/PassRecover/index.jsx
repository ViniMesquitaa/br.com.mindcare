import "./styles.css";

export function PassRecover() {
  return (
    <div className="container">
      <div className="emaildasenha">
      <h1 className="titulo">Recuperar Senha</h1>
        <p className="paragrafo">Digite seu e-mail para redefinir a senha</p>
        <form>
            <label htmlFor="email" className="label1">Email <span className="spanred">*</span></label>
            <input type="email" id="email" name="email" className="inputs1" required/>
            <button type="submit" className="botaozul">Enviar</button>
        </form>
      </div>
      <div className="codigoemail">
      <h1 className="titulo">Verifique seu e-mail</h1>
        <p className="paragrafo">Digite o código de 5 dígitos mencionado no e-mail</p>
        <form>
            <div class="code-inputs">
                <input type="text" maxlength="1" className="inputs1" required/>
                <input type="text" maxlength="1" className="inputs1" required/>
                <input type="text" maxlength="1" className="inputs1" required/>
                <input type="text" maxlength="1" className="inputs1" required/>
                <input type="text" maxlength="1" className="inputs1" required/>
            </div>
            <button type="submit" className="botaozul">Verificar código</button>
        </form>
        <p>Ainda não recebeu o email ?</p> <a href="#" class="link">Reenviar e-mail</a>
      </div>
      <div className="novasenha">
      <h1 className="titulo">Cadastrar Nova Senha</h1>
        <form>
        <label htmlFor="nova-senha" className="label1">Nova senha <span className="spanred">*</span></label>
            <input type="password" id="nova-senha" name="nova-senha" className="inputs1" required/>

            <label htmlFor="confirmar-senha" className="label1">Confirmação de senha <span className="spanred">*</span></label>
            <input type="password" id="confirmar-senha" name="confirmar-senha" className="inputs1" required/>

            <div class="requirements">
                A senha precisa ter:
                <ul>
                    <li>Mínimo de 8 caracteres.</li>
                    <li>Pelo menos 1 letra maiúscula.</li>
                    <li>Pelo menos 1 letra minúscula.</li>
                    <li>Pelo menos 1 número.</li>
                    <li>Pelo menos 1 símbolo (!@#$%&*).</li>
                </ul>
            </div>

            <div class="button-group">
                <button type="button" className="cancelar"><strong>Cancelar</strong></button>
                <button type="submit" className="botaozul">Salvar</button>
            </div>
            </form>
      </div>
    </div>
  );
}
