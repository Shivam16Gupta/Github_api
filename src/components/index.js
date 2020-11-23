import axios from 'axios';
import React,{useState} from 'react';
import List from '../components/list';
import '../assets/App.css';
import { Button } from '@material-ui/core';

const Index = ()=>{

    const [input,setInput]=useState('');
    const [name,setName]=useState([]);

    const handleChange=(e)=>{
        setInput(e.target.value);
        
    };
    
     const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(`https://api.github.com/users/${input}/repos?sort=created:asc`).then(response=>{
                
                const point=response.data;
                console.log(point);
                setName(point.map((val)=>{
                    
                    return val;
                }));
                
            })
     };
        return(
            <div>
                <div id='nav'>
                        <b>Find user Repos</b>
                    <input id='field' placeholder='Name' onChange={handleChange}></input>
                    <Button id='search' variant='contained' onClick={handleSubmit}>Search</Button>
                </div>
                <div>
                    <List arr={name}/>
                </div>
            </div>
        );
    
}
export default Index;