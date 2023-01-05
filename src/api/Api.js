import React from 'react'
import PhotoPost from './endPoints/PhotoPost';
import TokenPost from './endPoints/TokenPost';
import UserPost from './endPoints/UserPost';

const Api = () => {
  return (
    <div> 
        <h2> User Post </h2>
        <UserPost />

        <h2> Token Post </h2>
        <TokenPost />

        <h2> Photo Post </h2>
        <PhotoPost />
        
    </div>
  )
}

export default Api;