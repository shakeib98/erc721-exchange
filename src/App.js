import React, {Component} from 'react';
import './App.css';
import ListItems from './listItems'
// import Person from './Person/Person' ;

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items : [],
            isLoaded : false,
                
            }
            this.handleInput = this.handleInput.bind(this);
     this.addItem = this.addItem.bind(this);
    
        };

        componentDidMount () {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items:json,
                })
            })
            console.log(this.state.items);
        }
        
     


        handleInput = (event) => {
            this.setState( {
                value : event.target.value
    
            })
            console.log(event.target.value)
        }
       
    addItem = (event) => {
       console.log('Samad')
       
    }

    render() {
        var {isLoaded , items} = this.state;

        if(!isLoaded) {
            return <div> Loading...</div>
        }

        else {
        return (   
            <div className = "App"   >   
            
          <header>
              <form id = "ToDo-Form"  >
              
                  <input  placeholder="Deploy" 
                  type = "number"
                  value = {this.state.items} 
                  onChange={this.handleInput} />
                  <button onClick={ () => this.addItem}>Deploy</button>
                  <br/>
                  
                 </form>

          </header>
          <form id ="ToDo-Forms" >
          <input type="number" placeholder="Mint Coins" 
                  value = {this.state.items} 
                  onChange={this.handleInput} />
                  
                  <button onClick={ () => this.addItem}>Mint</button>
                 </form>


                 <form id ="ToDo-Forms" >
          <input type="number" placeholder="Transfer Coins" 
                  value = {this.state.items} 
                  onChange={this.handleInput} />
                  <button onClick={ () => this.addItem}>Transfer</button>
                  <br/>
                    <select id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select>
                 </form>

                 
                 <form id ="ToDo-Forms" >
                     <input placeholder="Sell Tokens"  type= "number"/>
                     
                     <button onClick={ () => this.addItem}>Sell</button>
                     <br/>

                    <select id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select>
                     <br/>
                     <br/>
                    <select id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="text"  placeholder="Buy Coins" />

                     <button onClick={ () => this.addItem}>Buy</button>
                     <br/>
                     <input type="number" placeholder="Get Balance" />
                     <button onClick={ () => this.addItem}>Balances</button>
                 </form>
                 


          
                 </div> 
          
          
        
        );}
    }
}

export default App