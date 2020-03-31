import react from 'react'
import './App.css'

const person = (props) => {

    return (
        <div className="App">
            <header>
              <form id = "ToDo-Form"  >
              
                  <input type="text" placeholder="Deploy Coins" 
                  value = {this.state.currentItem.text} 
                  onChange={this.handleInput} />
                  <button type="" onClick={this.addItem}>Deploy</button>
                  <br/>
                  
                 </form>

          </header>
          <form id ="ToDo-Forms" >
          <input type="text" placeholder="Mint Coins" 
                  value = {this.state.currentItem.text} 
                  onChange={this.handleInput} />
                  
                  <button>Mint</button>
                 </form>


                 <form id ="ToDo-Forms" >
          <input type="text" placeholder="Transfer Coins" 
                  value = {this.state.currentItem.text} 
                  onChange={this.handleInput} />
                  <button>Transfer</button>
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
                     
                     <button >Sell</button>
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

                     <button>Buy</button>
                     <br/>
                     <input type="number" placeholder="Get Balance" />
                     <button>Balances</button>
                 </form>


                
          
          
         
            </div>
    )
}

export default person ;