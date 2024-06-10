import {Link} from "react-router-dom"
import {
    Box,
    Card,
    CardContent,
    Typography
    
  } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
  
  export const Home = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);
    return (
      <Link to="/home">
    <div>
      {posts.map((post)=>(
        <Box width='300px'>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {post.id}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
             {post.title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      ))}
      </div>
      </Link>
      
    )
  }
   