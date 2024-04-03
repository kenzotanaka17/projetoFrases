import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png';

function App() {

  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'A palavra “impossível” foi inventada para ser desafiada.',
        'Somos capazes de fazer muito mais do que imaginamos!',
        'Nós somos como o clima: feitos de dias de chuva e de sol!',
        'Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons.',
        'Hoje é um novo dia. Não fique pensando no ontem.',
        'Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.',
        'Algumas coisas ruins acontecem para aprendermos a ficar mais fortes.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        	'Você cria a sua própria vida, um dia de cada vez! Tenha um dia iluminado e cheio de motivação!',
          'Cada amanhecer é um recomeço e um motivo para estar feliz e grato. Bom dia, amigos! ',
          'Bom dia pra você! Não importa se o dia de ontem foi difícil, hoje você pode começar de novo, por isso acredite em si mesmo e corra atrás dos seus sonhos!',
          'Com motivação e a dose de café certa você pode fazer tudo! Bom dia!'
      ]
    }
  ]

  function handleSwitchCategory(index : number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random( ) * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);
  }

  return (
    <div className='container'>
      <img 
        alt='Logo frases'
        src={logoImg}
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className='category-button'
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}
          onClick={ () => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}
    </div>
  )
}

export default App
