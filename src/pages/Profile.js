import React, {useState,useEffect} from 'react'
import {Row, Col} from 'antd';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {postTypes} from '../constants/postTypes';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MovieCard from '../components/MovieCard';
import api from '../api'



export default function Profile() {
  const [postType, setPostType] = useState(postTypes.MOVIE);
  const [posts,setPosts] = useState([])
  useEffect(() =>{
    const getPosts = async () =>{

        const res = await api.get("/posts/user");
        setPosts(res.data);
    }

    getPosts();

  },[])

  const handleOnLike= async (postId) =>{
    try{
     await  api.get(`posts/like/${postId}`);
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

  const handleOnShare= async (postId) =>{
    try{
      await api.post(`/share`,{postId});
      const newPosts = posts.map(post => {
        if(post.id === postId) {
          post.isShared = true;
        }
        return post
      });
      setPosts(newPosts);
    }catch(e) {
      console.log(e);
    }
  }

  return (
    <Layout>
      <ProfileHeader>
        <SwitchWrapper >
          <SwitchItem selected={postType === postTypes.MOVIE} onClick={() => setPostType(postTypes.MOVIE)}>My Movies</SwitchItem>
          <SwitchItem selected={postType === postTypes.ACTOR} onClick={() => setPostType(postTypes.ACTOR)}>My Actors</SwitchItem>
        </SwitchWrapper>
        <Link to="/add-post"> <AddBtn> Add Post</AddBtn></Link>
      </ProfileHeader>

      <Row gutter={30}>
        {
          posts.filter(({typeId}) => typeId === postType).map((movie) => (
            <Col span={6}> 
              <MovieCard movie={movie} onLike={handleOnLike} onShare={handleOnShare}/>
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

  const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const AddBtn = styled.button`
    height: 40px;
    width: 100px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
  `;