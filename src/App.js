import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos:[{title:'Adnan',edit:false},{title:'Ali',edit:false}],
      value:''
    }
  }

  add_Todo = ()=>{
    let obj = {title:this.state.value};
    this.setState({
      // todos:this.state.todos
      //spread operator
      todos:[...this.state.todos,obj],
      value:""
    });
  }

  delete_todo =(index)=>{
    this.state.todos.splice(index,1);
    this.setState({
      todos:this.state.todos
    })
  }

  deleteAll_todo = ()=>{
    this.state.todos.splice(0,this.state.todos.length)
    this.setState({
      todos:this.state.todos
    })
  }

  edit_todo = (index,val)=>{
    // let update_Val = prompt('Enter value');
    // this.state.todos[index] = update_Val;
    // this.setState({
    //   todos:this.state.todos
    // })
    this.state.todos[index].edit = true;
    this.setState({
      todos:this.state.todos
    })
  }

  change_update = (e,index)=>{
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos:this.state.todos
    })

  }

  update = (index)=>{
    this.state.todos[index].edit = false;
    this.setState({
      todos:this.state.todos
    })
  }
 

  render(){
    let {todos,value} = this.state;
    return(
      <div>
        <h1>TODO APP</h1>
        <input value = {value} onChange={(e)=> this.setState({value:e.target.value})} type="text" placeholder="Enter Value" />
        <button onClick={this.add_Todo}>Add Item</button>
        <button onClick={this.deleteAll_todo}>Delete All</button>

        <ul>
          {todos.map((element,index)=>{
            return <li key={index}>{element.edit? <input type="text" onChange={(e)=>{this.change_update(e,index)}} value = {element.title} />:element.title} 
                   {element.edit?
                   <button onClick={()=>{this.update(index)}}>Update</button>
                   :     
                   <button onClick={()=>{this.edit_todo(index,element.title)}}>Edit</button>
                    }
                   <button onClick={()=>{this.delete_todo(index,element.title)}}>DELETE</button>
                  </li>
          })}
        </ul>   
      </div>
        
    )
  }
}

export default App;