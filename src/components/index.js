import React,{useState} from 'react';
import List from '../components/list';
import '../assets/App.css';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import userData from '../service/api';

const Index = ()=>{

    const [input,setInput]=useState('');
    const [name,setName]=useState([]);

    const handleChange=(e)=>{
        setInput(e.target.value);
        
    };
    
     const handleSubmit=(e)=>{
        e.preventDefault();
        userData(input,(response)=>{
            setName(response.data.map((repo)=>{
                return repo;
            }));
        },(err)=>{
            swal("Sorry!!","INVALID USER","error");
        });
            
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