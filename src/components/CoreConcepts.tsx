import CoreConcept from "./CoreConcept.tsx";
import { CORE_CONCEPTS } from "../data.ts";

function CoreConcepts() {
    return ( 
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => <CoreConcept key={index} {...concept} />)}
          </ul>
        </section>
     );
}

export default CoreConcepts;