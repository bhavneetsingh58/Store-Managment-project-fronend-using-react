import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import DisplayCard from '../CustomComponents/DisplayCard'
export class LoginProc extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isAuthenticated :false,
            resData:''
        }
    }
    

    componentDidMount(){
        const payload ={
            email:"eve.holt@reqres.in",
            password:"cityslicka"
        }
        fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
               'Accept':'application/json',
               'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((data)=>{
            this.setState({resData:data.token});
            if(this.state.resData=="QpwL5tke4Pnpja7X4"){
             this.setState({
            
                isAuthenticated:true,
                resData: data.token
            })
        }
        console.log(data.token);
        console.log(this.state.resData);       
        },
        (error)=>{
            console.log(error);
            this.setState({
                isAuthenticated:false,
                resData:'No Data from Server'
            })
        }
        
        
        );
    }

    render() {
        if(this.state.isAuthenticated && this.state.resData=="QpwL5tke4Pnpja7X4"){
        return (
            <div className="content">
                <p>The Request returned - <DisplayCard></DisplayCard></p>
            </div>
        )
        }
        else{
            return(
                   <div className="content">
                        <p>No Data Returned</p>
                    </div>
            )
        }
    }
}

export default LoginProc
