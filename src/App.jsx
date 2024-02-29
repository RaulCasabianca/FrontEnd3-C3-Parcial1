import './App.css'

function App() {
  const [colorFavorito, setColorFavorito] = useState({
    form: false,
    datos: {}
  })

  return (
    <>
      <div className='App'>
        <h1>Elige un color</h1>
        <form {setColorFavorito={setColorFavorito}}/>
      </div>
      {setColorFavorito.form $$ <Card colorFavorito={colorFavorito.datos}/>}
    </>
  )
}

export default App