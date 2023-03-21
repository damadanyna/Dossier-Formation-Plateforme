import textes from './data/textes.json';
function App() {
  return (
    <div>
    <h1>{textes.titre}</h1>
    <p>{textes.description}</p>
    <h1 className="text-3xl font-bold underline"> Mety ilay izy </h1>
    <button>{textes.bouton}</button>
  </div>
  );
}

export default App;
