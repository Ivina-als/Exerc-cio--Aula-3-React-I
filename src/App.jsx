import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//router é responsavel por gerenciar as rotas, routes engloba as rotas e route é a rota em si

//criar portas: npm i react-router-dom -> instalou o react rounter dom

//com o router será possível verificar se o usuário está autenticado antes de navegar por
//outras páginas da minha aplicação

// agora essa função app() vai só gerenciar as rotas das páginas
import Login from "./pages/Login/index";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
