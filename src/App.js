import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component{
    state = {
        characters: [
            {
                'name': '刘小二',
                'job': '前端'
            },
            {
                'name': '张达华',
                'job': '安卓'
            },
            {
                'name': '王伟',
                'job': '会计师'
            }
        ]
    };
    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters:characters.filter((character,i)=>{
                return i !== index;
            })
        })
    }
    handleSubmit = character=>{
        this.setState({
            characters:[...this.state.characters,character]
        })
    }
    render(){
       
        return(
            <div className='App'>
                <Table charactersData={this.state.characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
};
export default App