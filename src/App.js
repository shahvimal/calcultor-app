import React,{Component} from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Result from './components/Result/Result'
import KeyPad from './components/Keypad/Keypad'
import ScientificToggle from './components/SingleToggleSwitch/ScientificToggle'
import ThemeToggleButton from './components/ThemeToggle/ThemeToggleButton';


class App extends Component {
 
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  //defining states here.
  state = {
    result : '0',
    display : '0',
    scientificToggle : false,
    theme: 'light',
    appTheme: 'lightApp'
  }

  //checks if the given input is operator or not.
  isOperator = bt=>{
    if(bt==='+'||bt==='-'||bt==='*'||bt==='/'){
      return true;
    }else{
      return false;
    }
  }

  //function for calculating the result
  calculate = () => {
    try {
        let res = this.state.result.split(' ');
        let result = 0;
        for(let i=0;i<res.length;i++){
          if(this.isOperator(res[i])){
              let a = parseInt(res[i-1]);
              let b = parseInt(res[i+1]) || 0;

              if(res[i]==='+'){
                res[i+1] = a+b;
              }else if(res[i]==='-'){
                res[i+1] = a-b;
              }else if(res[i]==='*'){
                res[i+1] = a*b;
              }else if(res[i]==='/'){
                res[i+1] = a/b;
              }

              result = res[i+1];
          }
        }
        this.setState({
            result: result ,
            display : result
        })
    } catch (e) {
        this.setState({
            result: "0",
            display: 'error'
        })
    }
  };

  //function for resetting the calculator.
  reset = () => {
      this.setState({
          result: '0',
          display : '0'
      })
  };


  onClick = button =>{

    if(button === '='){
      this.calculate();
    }
    else if(button === 'clear'){
      this.reset();
    }
    else if(this.isOperator(button)){
      this.setState({
        result:this.state.result + ` ${button} `
        });
    }
    else if(button === 'sign'){
      this.setState({
        result:-parseInt(this.state.result),
        display: -parseInt(this.state.display)
      })
    }
    else if(button === 'sq'){
      this.setState({
        result : parseInt(this.state.result )**2,
        display : parseInt(this.state.display )**2
      })
    }
    else if(button === 'sqrt'){
      this.setState({
        result : Math.sqrt(parseInt(this.state.result )),
        display : Math.sqrt(parseInt(this.state.display)),
      })
    }
    else{
      if(this.state.result === '0' || this.state.result === 0){
        this.setState({
          result:button,
          display : button
        })
      }else{
        var result = this.state.result;
        if(result[result.length -1] === ' '){
          this.setState({
            result:this.state.result + button,
            display : button
          })
        }else{
          this.setState({
            result:this.state.result + button,
            display : this.state.display + button
          })
        }
      }
    }
  }

  //function to Handle Scientific Toggle Click.
  handleScientificToggleClick=()=>{
    this.setState({
      scientificToggle: !this.state.scientificToggle
    });
  }

  
  //handleClickonLightThemeButton
  handleThemeToggleButtonClick = (button)=>{
    if(button==='light'){
      this.setState({
        appTheme:'lightApp'
      })
    }
    if(button==='dark'){
      this.setState({
        appTheme:'darkApp'
      })
    }
  }
  render(){
    return (
      <div className= {this.state.appTheme}>
        <div className={"calculator-bd"}>
          <h1>Calculator</h1>
          <Result result={this.state.display}/>
          <KeyPad 
            onClick={this.onClick} 
            scientificToggle = {this.state.scientificToggle}
          />

          <ScientificToggle 
            onClick = {this.handleScientificToggleClick} 
            isToggleOn = {this.state.scientificToggle}
          />
          <ThemeToggleButton onClick={this.handleThemeToggleButtonClick}/>
        </div>
      </div>
    );
  }
}


export default App;
