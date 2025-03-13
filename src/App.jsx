import { CORE_CONCEPTS }from './data.js';
import Header from './components/Header.jsx';


function CoreConcepts({title,image, description}) {
  return (
    <li>
      <img src={image} alt={title} class='rotate'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
          <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcepts {...CORE_CONCEPTS[0]}/>
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/>
            </ul>

          </section>
      </main>
    </div>
  );
}

export default App;
