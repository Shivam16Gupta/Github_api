import React from 'react';
import '../assets/App.css';

const List =(props)=>{
    const newArr=props.arr;
    
    if(newArr.length)
    {
    return(
        <div id='container'>
            <h3>{newArr.map((e)=> <li id='name' key={e.id}>
                <a href={e.html_url}>
                    {e.name}
                    </a>
                </li>)}
            </h3> 
        </div>
    );
    }
    else{
        return(<div id='res'><h1>NO REPOS!!</h1></div>);
        
    }
}
export default List;