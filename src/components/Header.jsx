import reactImg from '../assets/react-core-concepts.png'; 
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom"  class='rotate'/>
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(reactDescriptions.length-1)]} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  export default Header;