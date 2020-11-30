import React from 'react';
import '../assets/App.css';
import {Alert} from '@material-ui/lab';


const List =(props)=>{
    const newArr=props.arr;
    return(
        <div id='container'>
            {newArr.length?<h3>{newArr.map((e)=> <li id='name' key={e.id}>
                <a href={e.html_url}>
                    {e.name}
                    </a>
                </li>)}
            </h3>:
            <Alert severity="info">
                This user has no public repos.
            </Alert>}
            
        </div>
    );
}
export default List;