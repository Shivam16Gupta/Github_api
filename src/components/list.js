import React from 'react';
import '../assets/App.css';
import {Alert} from '@material-ui/lab';


const List =(props)=>{
    const newArr=props.arr;
    return(
        <div id='container'>
            {newArr.length?<h3>{newArr.map((e)=> {
            return  <div  key={e.id}>
                    <li id='name'>
                    <a href={e.html_url}>
                            {e.name}
                    </a>
                    </li>
                    </div>})}
                    </h3>:
            <Alert severity="info">
                This user has no public repos.
            </Alert>}
            
        </div>
    );
}
export default List;