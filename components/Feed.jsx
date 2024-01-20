"use client";
import {useState,useEffect} from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({data , handleTagClick}) =>
{
  // const posts = prompt.data;
  // console.log(data);
  return(
    <div className='mt-16 prompt_layout'>
      
    </div>
  )
}

const Feed = () => {

  const [searchText,setSearchText] = useState('')
  const [posts,setposts] = useState([]);

  const handleSearchChange = (e)=>
  {

  }

  useEffect(()=>
  {
    const fetchPost = async()=>
    {
      const response  = await fetch("/api/prompt");
      const data  = response.json();
      console.log("This is the fetch call data-> " , data)
      setposts(data);
    }
    fetchPost();
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'> 
        <input
         type='text'
         placeholder='Search for a tag of a username'
         value={searchText}
         onAbort={handleSearchChange}
         required
         className='search_input peer'
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={()=>{}}
      />

    </section>
  )
}

export default Feed