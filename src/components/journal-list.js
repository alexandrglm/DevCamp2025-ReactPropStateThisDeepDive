// De DeepDive... GUIA 1
/*
Aunque ya lo hemos revisado en todas las guías anteriores, 
vamos a describir cada element de un componente de nuevo
*/

// 1.   Es un CLASS component? Entonces el import adecuado
import React, { Component } from "react";


// 2.   Habilidad para exportar nuestro class componente JournalList que extiende los componentes genéricamente hablando
export default class JournalList extends Component {
    
    
    // 3. PROPS? Entonces su CONSTRUCTOR
    constructor(props) {
        super(props);

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


    // 4.   REhacemos el render(), y de aquí nos vamos al app.js
    render() {

        return (
        
        <div>
            <h1>JOURNAL ENTRIES:</h1>
        
            {this.state.journalData.map((entry) => {
        
            return (
                <div key={entry.title}>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
                </div>
            );   
            })}
        </div>
        );
    }
}
