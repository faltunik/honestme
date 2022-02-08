import { createContext, useContext, useState, useEffect } from 'react'
import PostContext from './PostContext';
import AuthProvider from './AuthProvider';
import { useParams } from "react-router-dom";
import AuthContext from './AuthContext';
import useAxios from '../utils/useAxios';
// import { useParams } from "react-router-dom";

export const PostProvider = ({children}) => {
    let [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false);
    let [postfield, setPostfield] = useState('');
    let [comments, setComments] = useState([])
    let [sublys, setSublys] = useState([])
    let params = useParams()
    let api = useAxios()

    let {ShowAlert, user} = useContext(AuthContext)





    let getPosts = async() =>{
        let response = await api.get('/post/post/')

        if(response.status === 200){
            setPosts(response.data)
            console.log(response.data)
        }
        
    }

    let getComments = async(myid) => {
        let response = await api.get(`comments/comment/?id=${myid}`)
        if (response.status === 200){
            setComments(response.data)
            console.log(response.data)
        }
    }

    let getSubly = async(subid) => {
        console.log(subid)
        let response = await api.get(`sublys/subly/?myid=${subid}`)
        if (response.status === 200){
            setSublys(response.data)
            console.log(response.data)
        }
    }
    

    
    const AddPost = async (e) => {
        e.preventDefault()
        if (postfield.length === 0){
            alert('Enter some data')
        }
        else if (postfield.length > 600){
            alert('Max Lenght = 600 character only')
        }
        else {
        try{
            let response = await api.post('/post/post/', {'content': postfield, 'author': user.id})
            console.log(response.data)
            setPosts([response.data, ...posts])
            setPostfield('')
            setModal(false)
            ShowAlert('Post is Added', "success")
        }
        catch(error) {
            console.log(error)
        }
    }       
    }


    



    let contextData = {
        api,
        posts,
        setPosts,
        getPosts,
        AddPost,
        modal,
        setModal,
        postfield,
        setPostfield,
        comments,
        setComments,
        getComments,
        sublys,
        setSublys,
        getSubly,
    }



    return (
        
        
        
        <div>
        <PostContext.Provider value={contextData} >
            {children}
        </PostContext.Provider>            
        </div>
    )
}

export default PostProvider;
