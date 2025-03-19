import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';


function App() {
  console.log("APP start");
  const [selectedTopic, setSelectedTopic] = useState();
  console.log("456 " + selectedTopic);
  let tabContent = 'Please select a button';

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // tabContent = selectedButton;
    console.log("123 " + selectedTopic);
  }


  console.log("APP end******************8");
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) =>
              <CoreConcepts key={concept.title} {...concept} />)}
          </ul>

        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {EXAMPLES.entries.map(([key, value], index) =>
              <TabButton isSelected={selectedTopic === key} onSelect={() => handleSelect(value.title)}>{value.title}</TabButton>)}
            {/* // <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            // <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            // <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            // <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton> */}
          </menu>
          {!selectedTopic ? <p>Please select a topic </p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div >
  );


}

export default App;
