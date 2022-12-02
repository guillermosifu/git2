

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchUser } from '../../services';
import { getRepos } from '../../services';

import{
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";

const User = () => {
const {username}= useParams();

const[userDetail,setUserDetail]=useState(null);
const[repos,setRepos]= useState([]);

const fetchUser =async()=>{
    const data = await searchUser(username);
    setUserDetail(data)
    console.log("dtail",data)
}

const fetchRepos = async()=>{
    const data = await getRepos(username);
    setRepos(data)
    console.log("repos",data);
}

useEffect(()=>{
    fetchUser();
},[]);

useEffect(()=>{
    fetchRepos();
},[])



  return (
    <Container maxWidth ="md">
        {userDetail && (
            <Box mt ={10}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box mb={1}>
                            <img style={{borderRadius :"50%"}}
                            width={200} src={userDetail.avatar_url} alt={userDetail.login} />
                       </Box>
                       <Typography mb={1} variant ="h6">
                        {userDetail.name}
                       </Typography>

                    </Grid>

                </Grid>

            </Box>
        )}
      
    </Container>
  )
}

export default User;
