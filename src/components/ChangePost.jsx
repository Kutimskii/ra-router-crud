import { useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ChangePost({content}){
  const {id}=useParams();
  const [textPost, setTextPost] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    getPost();
  },[])
  const getPost = async()=>{
    const response = await fetch(`http://localhost:7070/posts/${id}`);
    const result = await response.json()
    setTextPost(result.post.content)
  }
  const close = ()=>{
    localStorage.setItem('text',inputRef.current.value)
    navigate(`/posts/${id}`)};
  const inputRef = useRef(null);
  const changePost = (text)=>{
    if(text.length <= 1) {
      return
    }
    fetch(`http://localhost:7070/posts/${id}`,{
      method:"PUT",
      body:JSON.stringify({"content": text})
    })
    localStorage.setItem('text','')
    navigate('/');
  }
  return(
    <div className="create_post_wrap">
      <button className="close_post_btn" onClick={close}>&#10006;</button>
      <input type="text" className="create_post_input" ref={inputRef} value={textPost} onChange={(e)=>setTextPost(e.target.value)}/>
      <div className="create_post_btn_wrap"><button className="create_post_btn" onClick={()=>{changePost(inputRef.current.value)}}>Сохранить</button></div>
    </div>
  );
}