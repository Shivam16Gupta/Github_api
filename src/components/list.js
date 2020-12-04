import React from 'react';
import '../assets/App.css';
import {Card,CardActions,CardContent,Button,Typography,Grid} from '@material-ui/core';
import classes from '../assets/card.module.css';


const List =(props)=>{
    const newArr=props.arr;
    console.log('hi');
    return(
        <div id='container'>
            <h3>{newArr.map((e)=> {
            return  <div  key={e.id}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={10} md={8}>
                    <Card className={classes.root}>
                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {e.full_name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {e.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Description:- {e.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Created at:- {e.created_at}
                    <br />
                    Clone URL:- {e.clone_url}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <a href={e.html_url} color="primary" className={classes.btn}>Visit</a>
                    </CardActions>
                    </Card>
                    </Grid>
                    </Grid>
                    </div>})}
                    </h3>
        </div>
    );
}
export default List;