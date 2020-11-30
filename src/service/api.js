import axios from 'axios';

const userData= (input,repos,error)=>{
    axios.get(`https://api.github.com/users/${input}/repos?sort=created:asc`).then(response=>{
                
                repos(response);
                
            }).catch(err => {
                error(err);
              });
}
export default userData;