import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Post({content,created,id}){
  const navigate  = useNavigate()
  const date = new Date(created).toLocaleString();
  const [ident,setId] = useState(id)
  console.log(ident)
  const changePost = () => {
    navigate(`/posts/${ident}`)
   }
  return(
    <li className="post" 
    onClick={changePost}>
      <p className="post_created">{date}</p>
      <div className="post__content">{content}</div>
    </li>
    
  );
}