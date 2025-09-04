// Expandimos Guia PArt 2 con un comparador de sintaxis visuales

import React, { Component, useState } from 'react';

// Version para Componente CLASS
class CounterClass extends Component {ç

    constructor(props) {

        super(props);
        this.state = { count: 0 };
    }

    incrementa = () => {

        this.setState( { count: this.state.count + 1  } )

    }

    render() {

        return (

            <div>
                <p>Class Counter:   {this.state.count}</p>
                <button onClick={this.incrementa}>incrementa</button>
            </div>
        )
    }

}

// Aquí, la implementación de la FUNCION Counter
const CounterFunction = () => {

    const [count, setCount] = useState(0);

    return(
        <div>
        <p>Function Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    ) ;

}


export { CounterClass, CounterFunction };