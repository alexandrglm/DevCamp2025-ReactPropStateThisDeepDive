// De DeepDive... GUIA 1
/*
Aunque ya lo hemos revisado en todas las guías anteriores, 
vamos a describir cada element de un componente de nuevo
*/

/*
De DeepDive... GUIA 2
    - Añadimos un componente-functional, journal-entry
    - Refactorizamos todo journal-list.js para usar el componente funcional.
    - Finalmente, separamos el componente entry a un nuevo script, siempre UN COMPONENTE = SCRIPT
        - porello, hacemos las modificaciones pertinentes en el journal-list original(aqui)

*/

// 1.   Es un CLASS component? Entonces el import adecuado
import React, { Component } from "react";
import JournalEntry from "./journal-entry";
import { CounterClass, CounterFunction } from "./comparison-demo";



// 2.   Habilidad para exportar nuestro class componente JournalList que extiende los componentes genéricamente hablando
export default class JournalList extends Component {
    
    
    // 3. PROPS? Entonces su CONSTRUCTOR
    constructor(props) {
        super(props);

        // Demostramos contextos this de props y state
        console.log('[NOTICE Exercise] this context:', this)
        console.log('[NOTICE Exercise] this.PROPS:', this.props)
        console.log('[NOTICE Exercise] this.STATE:', this.state)

        this.state = {
        journalData: [
            {
            title: 'Journal Entry #1',
            content: 'Soy el texto de la entrada #1',
            },
            {
            title: 'Journal Entry #2',
            content: 'Soy el texto de la entrada #2',
            },
            {
            title: 'Journal Entry #3',
            content: 'Soy el texto de la entrada #3',
            },
        ],
        };
    }


    // Añadimos el JournalEntry component tal cual se debería
    render() {
        console.log('[NOTICE Exercise] THIS is RENDER this context', this);
        
        return (
            <div>
            <h1>Journal-List as FUNC demo entry list:</h1>
            
            {/* Experimentación adicional - Comparación de componentes */}
            <div style={{border: '2px dotted red', padding: '10px', margin: '20px 0'}}>
                <h2>🔍 EXPERIMENTACIÓN: Class vs Function Components</h2>
                <CounterClass />
                <CounterFunction />
            </div>
            
            {/* Código base del ejercicio */}
            {this.state.journalData.map((entry) => {
                return (
                <JournalEntry
                    key={entry.title}
                    title={entry.title}
                    content={entry.content}
                />
                );
            })}
            </div>
        );
    }
}


