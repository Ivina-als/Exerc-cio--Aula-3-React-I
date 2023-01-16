import "./App.css";
import AnchorDefault from "./components/Anchor";
import ButtonDefault from "./components/Button";
import InputLogin from "./components/Input";
import Title from "./components/Title/index";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <div className="div-login">
          <Title id="title-login" title="Login" />
          <InputLogin type="text" label="Usuário" />
          <InputLogin type="password" label="Senha" />
          <ButtonDefault id="button01" name="login" />
          <AnchorDefault name="Esqueceu sua senha?" />
        </div>
      </section>
    </div>
  );
}

export default App;
