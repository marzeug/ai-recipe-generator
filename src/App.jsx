import './App.css'

function App() {
  return (
    <main>
      <h1>AI Recipe Generator</h1>
      <p>Bienvenue dans mon application de génération de recettes avec IA.</p>

      <textarea
        placeholder="Entre tes ingrédients ici..."
        rows="6"
        cols="40"
      />

      <br />

      <button>Generate recipe</button>
    </main>
  )
}

export default App