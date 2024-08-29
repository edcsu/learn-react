import reactImg from  "./assets/react-core-concepts.png"
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props: any) {
  return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
}

function Header() {
  const reactDescription = reactDescriptions[genRandomInt(2)]
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
