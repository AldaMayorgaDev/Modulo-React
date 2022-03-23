import logo from './logo.svg';
import './App.css';
import Button from '../src/components/Button'

function Header() {
  return (


    <header className="header">
      <span classname="logo"> Logo</span>
      <h3>Este es el header</h3>
      <div className="containerLinks">
        <a href="# "> <span> Home</span></a>
        <a href="# "> <span> Acerca de </span></a>
        <a href="# "> <span> Contacto</span></a>
      </div>
    </header>
  );
}

function Footer(props) {
  return (
    <footer>Hecho con con 3 en Kodemia por {props.name}</footer>
  );

}

function Layout(props) {
  return (
    <div className="layout">
      <Header />
        {props.children}
      <Footer />
    </div>

  );
}


function App() {
  const name = 'Aldahir Mayorga'
  const age = '27'
  const ageCopy = `Tengo ${age} años`
  return (
    <div className="App">
      <Layout >
      <main className="App-header">
        <h2>Hol soy {name}</h2>
        <p>Me gustan los gatos y tengo {age} años</p>
        <p>{ageCopy}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Button color= "green"  >Texto Boton</Button>
      <Button color= "blue"  >Texto </Button>
      <Button color="yellow"  >Texto Hi</Button>
      </main>
      </Layout>
      
     
    </div>
  );
}

export default App;
