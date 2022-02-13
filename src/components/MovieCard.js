import React from 'react'
import styled from 'styled-components';
import {
  HeartOutlined,
  CommentOutlined
} from '@ant-design/icons';

import api from '../api';

export default function MovieCard({movie, onLike, onShare}) {

  const {name, imageName, likeCount, commentCount, id, isShared} = movie;

 

  return (
    
        <Wrapper>
          <Img img={imageName}></Img>
          <Title>{name}</Title>
         
          <CountWrapper>
            <div>
              <HeartOutlined style={{color: 'white', fontSize: 24, marginRight: 30}} onClick={() => onLike(id)}/>
              <LikeCount>
              {likeCount} likes
            </LikeCount>
            </div>
            <div>
            <CommentOutlined style={{color: 'white', fontSize: 24}} />
              <LikeCount>
              {commentCount} Comments
            </LikeCount>
            </div>
          </CountWrapper>

          { !isShared && <ShareBtn onClick={() => onShare(id)}>Share</ShareBtn>}
        </Wrapper>
     
  )
}


const Wrapper = styled.div`
  margin-bottom: 30px
`;

const Img = styled.div`
  background-image: url(${props => props.img}); 
  background-size: cover;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.div`
  color: white;
  font-size: 24px;
  margin-top: 10px
`;

const LikeCount = styled.div`
  color: white;
  font-size: 14px;
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ShareBtn = styled.button`
  margin-top: 20px
`;