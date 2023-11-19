import { useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({content}){
  const [textPost, setTextPost] = useState('');
  useEffect(()=>{
    checkValue()
  },[])
  const checkValue= ()=>{
    if(content){
      return setTextPost(content);
    }
    const text=localStorage.getItem('text');
    if(text){
      return setTextPost(text);
    }
  }
  const navigate = useNavigate();
  const addPost = (text)=>{
    if(text.length <= 1) {
      return
    }
    fetch('http://localhost:7070/posts',{
      method:"POST",
      body:JSON.stringify({"content": text})
    })
    localStorage.setItem('text','')
    navigate('/');
  }
  const close = ()=>{
    localStorage.setItem('text',inputRef.current.value)
    navigate('/')};
  const inputRef = useRef(null)
  return(
    <div className="create_post_wrap">
      <button className="close_post_btn" onClick={close}>&#10006;</button>
      <input type="text" className="create_post_input" ref={inputRef} value={textPost} onChange={(e)=>setTextPost(e.target.value)}/>
      <div className="create_post_btn_wrap"><button className="create_post_btn" onClick={()=>{addPost(inputRef.current.value)}}>Опубликовать</button></div>
    </div>
  );
}