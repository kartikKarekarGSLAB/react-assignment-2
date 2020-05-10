import React,{ Component } from 'react';
import './App.css';
import Validation from './../Validation/Validation';
import Char from './../Char/Char';

class Application extends Component {

    state = {
        data : 'DEMO-STRING',
        length : 'DEMO-STRING'.length
    }

    showLength= (event) => {
        this.setState({data:event.target.value, length : event.target.value.length});
    }

    removeCharacter= (index) => {
        let previousState = {...this.state};        
        let newData = previousState.data.substring(0, index) + previousState.data.substring(index+1, previousState.data.length);
        this.setState({length: newData.length, data: newData}); 
    }

    render() {

        let characters = [...this.state.data];
        
        return (
        <div className="App">
            <input className="input" onChange={this.showLength} value={this.state.data}/>
            <br/>
            <progress value={this.state.length} max="100" /> {this.state.length}%
            <br/>
            {characters.map((char, index) => 
                <Char
                class={ index%2 === 0 ? `even-char` : `odd-char`} 
                key={`${index}${char}`} 
                char={char}
                click={() => this.removeCharacter(index) }
                />)}            
            <br/>
            <Validation length={this.state.length}/>
        </div>
        );        
    }
}

export default Application;
