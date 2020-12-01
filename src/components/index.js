import React,{useState} from 'react';
import List from '../components/list';
import '../assets/App.css';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import userData from '../service/api';
import bg from '../assets/images/undraw_File_searching_re_3evy-1.svg';

const Index = ()=>{

    const [input,setInput]=useState('');
    const [name,setName]=useState([]);
    const [avatar,setAvatar]=useState('');
    const [user,setUser]=useState('');

    const handleChange=(e)=>{
        setInput(e.target.value);
        
    };
    
     const handleSubmit=(e)=>{
        e.preventDefault();
        userData(input,(response)=>{
            setAvatar(response.avatar_url);
            setName(response.data.map((repo)=>{
                setUser(repo.owner.login);
                setAvatar(repo.owner.avatar_url);
                return repo;
            }));
        },(err)=>{
            swal("Sorry!!","INVALID USER-NAME","error");
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
                    {name.length===0?<img src={bg} alt='background' />:
                    <div>
                    <img id='avatar' src={avatar} alt='avatar'/>
                    <h3 id='userName'>{user}</h3>
                    <List arr={name}/>
                    </div>}
                </div>
            </div>
        );
}
export default Index;