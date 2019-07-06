import React, { Component } from 'react';
import { Button, Input, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store'
class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = {
            data: store.getState(),
        }
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    onInputChange(e) {
        const action = {
            type: "INPUT_CHANGE",
            value: e.target.value
        }
        store.dispatch(action)
        e.target.value = ''
    }
    addItem () {
       const action = {
           type: "ADD_ITEM"
       }
       store.dispatch(action)
       this.input.state.value = ''
    }
    storeChange(){
        this.setState({
            data: store.getState()
        })
    }
    delList(index) {
        const action = {
            type: "DEL_ITEM",
            index
        }
        store.dispatch(action)
    
    }
    render() { 
        return ( 
                <div>
                    <Input
                        ref={(input)=>{this.input = input}}
                        placeholder={ this.state.data.inputvalue}
                        style={{ width:'250px', paddingLeft:'50px'}}
                        onChange = {this.onInputChange.bind(this)}/>
                    <Button type="primary" onClick={this.addItem.bind(this)}>Button</Button>
                    <List
                        bordered
                        dataSource={this.state.data.list}
                        renderItem={(item, index)=>(<List.Item onClick={this.delList.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
         );
    }
}
 
export default TodoList;