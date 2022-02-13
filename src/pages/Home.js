import React, {useState,useEffect} from 'react'
import {Row, Col} from 'antd';
import styled from 'styled-components';

import {postTypes} from '../constants/postTypes';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MovieCard from '../components/MovieCard';
import api from '../api'


export default function Home() {
  const [postType, setPostType] = useState(postTypes.MOVIE);
  const [posts,setPosts] = useState([])

  useEffect(() =>{
    const getPosts = async () =>{

        const res = await api.get("/posts");
        setPosts(res.data);
    }

    getPosts();

  },[])

  const handleOnLike= async (postId) =>{
    try{
     await api.get(`posts/like/${postId}`);
      const newPosts = posts.map(post => {
        if(post.id === postId) {
          post.likeCount++;
        }
        return post
      });
      setPosts(newPosts);
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      <SwitchWrapper >
        <SwitchItem selected={postType === postTypes.MOVIE} onClick={() => setPostType(postTypes.MOVIE)}>Movies</SwitchItem>
        <SwitchItem selected={postType === postTypes.ACTOR} onClick={() => setPostType(postTypes.ACTOR)}>Actors</SwitchItem>
      </SwitchWrapper>


      <Row gutter={30}>
      {
       posts.filter(({typeId}) => typeId === postType).map((movie) => (
        <Col span={6}> 
          <MovieCard movie={movie} onLike={handleOnLike}/>
        </Col>
      ))
      }
      </Row>
    </Layout>
  )
  }

  const SwitchWrapper = styled.div`
    color: white;
    margin-bottom: 30px;

  `

  const SwitchItem = styled.span`
    font-size: 20px;
    cursor: pointer;
    border-bottom: ${props => props.selected ? '2px solid white' : 'none'};
    padding: 8px 0px;
    margin-right: 20px;
  `;