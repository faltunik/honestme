import React, {useContext, useEffect, useState} from 'react'
import PostContext from '../context/PostContext'
import useAxios from '../utils/useAxios'
import PostDetail from './PostDetail'
import { Spinner } from 'react-bootstrap'


export default function HomePage() {
    let {posts, getPosts} = useContext(PostContext)
    let [postloading, setPostloading] = useState(true)

    useEffect(()=> {
        getPosts()
        setPostloading(false)
    }, [])



    return (
        <div>
            
            {postloading? <Spinner animation="border" />
            : <div>
                { posts.map(post => (
                    <PostDetail key= {post.id} post = {post} />
            ))}
            </div>
             }
{/* {postloading ? <Spinner animation="border" /> : posts.map(post => <PostDetail key={post.id} post={post} />)} */}
            
            
            
        </div>
    )
}


{/* <li key={note.id} >{note.content}</li> */}
