// De DeepDive... GUIA 2

import React, { Component } from "react";

// Vamos a hacer nuestro componente de manera FUNCIONAL en vez de CLASS
// componente INLINE sòlo demo
const JournalEntry = (props) => {

    console.log('[NOTICE] -> Journal-List component as FUNCTIONAL demo in use, props', props);

    return (

        <div>
            <h1>Demo for journal-list as FUNCIONATL:</h1>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>

    );
};


export default JournalEntry;