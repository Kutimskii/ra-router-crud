import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../Post";
export default function ViewPage(){
  const [post,setPost] = useState(null);
  const{id} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    getPost();
  },[])
  const getPost = async()=>{
    const response = await fetch(`http://localhost:7070/posts/${id}`);
    const result = await response.json()
    setPost(result.post)
  }
  const changePost = ()=>{
    navigate(`/posts/change/${id}`);
  }
  const deletePost = ()=>{
    fetch(`http://localhost:7070/posts/${id}`,{
      method:"DELETE",
    })
    navigate(`/`);
  }
  if(!post){
    return
  }
  return(
    <>
    <ul className="posts_container">
      <Post
      content={post.content}
      created={post.created}
      id={post.id}
      key={post.id}
      />
    </ul>
    <div className="post_change_btn_wrap">    
    <button className="post_change_btn" onClick={changePost}>Изменить</button>
    <button className="post_delete_btn" onClick={deletePost}>Удалить</button>
    </div>
    </>
  );
}