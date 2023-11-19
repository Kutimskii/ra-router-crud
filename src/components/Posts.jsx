import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from './Post';
export default function Posts(){
  const [posts,setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    getPosts();
  },[])
  const addPage = ()=>{
    navigate('/posts/new');
  }
  const getPosts = async()=>{
    const response = await fetch('http://localhost:7070/posts');
    const result = await response.json()
    if (result.length >= 1){
      return setPosts(result)
    }
  }
  
  return(
  <>
  <div className="btn_add_post_wrap"><button className="btn_add_post" onClick={addPage}>Add post</button></div>
  <ul className="posts_container">
    {posts.map(el=>{
      return <Post
      content={el.content}
      created={el.created}
      id={el.id}
      key={el.id}
 />})}
   
  </ul>

  </>
  );
}