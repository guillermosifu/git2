import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchUser } from "../../services";
import { getRepos } from "../../services";
import TypographyIconBio from"../../components/typographyIconBio"

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const User = () => {
  const { username } = useParams();

  const [userDetail, setUserDetail] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUser = async () => {
    const data = await searchUser(username);
    setUserDetail(data);
    console.log("dtail", data);
  };

  const fetchRepos = async () => {
    const data = await getRepos(username);
    setRepos(data);
    console.log("repos", data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Container maxWidth="md">
      {userDetail && (
        <Box mt={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box mb={1}>
                <img
                  style={{ borderRadius: "50%" }}
                  width={200}
                  src={userDetail.avatar_url}
                  alt={userDetail.login}
                />
              </Box>
              <Typography mb={1} variant="h6">
                {userDetail.name}
              </Typography>
              <Typography mb={3} variant ="h6" color= "#000000">
                {userDetail.login}
              </Typography>
              <Typography mb={2} variant = "body1">
                {userDetail.bio}
              </Typography>
              <Typography mb={2} variant = "body1">
                {userDetail.company}
              </Typography>
             <Button variant ="contained" fullWidth>
                Edit Profile
             </Button>
             <TypographyIconBio  icon= "people" text={`${userDetail.followers} followers.${userDetail.following}`} />
                          
            </Grid>            
            <Grid item xs={12} md={8}>
            <Typography variant ="h5">Repositorios</Typography>
            <Box>
              {repos.length > 0 && 
              repos.map((repo,index)=>(
                <Box key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" fontWeight="800">
                        {repo.name}
                      </Typography>
                      <Typography>
                        {repo.language}
                      </Typography>
                      <Typography>
                        {repo.created_at}
                      </Typography>


                    </CardContent>
                  </Card>
                  </Box>
              ))}

            </Box>

                </Grid>

            </Grid>
          
        </Box>
      )}
    </Container>
  );
};

export default User;
