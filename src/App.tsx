import React from 'react';
import { ContextConsumer, Context} from './context'
import Teste from './Teste'
import './App.css'
interface ComponentState{
 theme: 'dark' | 'light'
}


export default class App extends React.Component<any,ComponentState>{
  static contextType = Context
  
   constructor(props:any){
     super(props)
     this.state = {
      theme: 'dark'
     }  

     this.handleOnChangeTheme = this.handleOnChangeTheme.bind(this)
   }

    componentDidMount(): void {
      const context = App.contextType;
      console.log(context)
    }
    handleOnChangeTheme(){
     this.setState((prev) =>({
      theme: prev.theme === 'dark' ? 'light' : 'dark'
     }))
      console.log(this.state.theme)
    }

   render(){
    const { theme } = this.state
    return(
      <Context.Provider value={{ 
        theme,
        onChangeTheme: this.handleOnChangeTheme
         }}>
        <button onClick={() => this.handleOnChangeTheme()}> Mudando o tema </button>
        <Teste/>       
      </Context.Provider>
    )
   }
}