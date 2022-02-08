import React, {useState, useEffect, useContext} from 'react'
import useAxios from '../utils/useAxios'
import Comment from './Comment';
import PostContext from '../context/PostContext';
import AddComment from '../components/AddComment';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function PostLogic() {
    let [notecontent, setNotecontent] = useState([])
    let [isliked, setIsliked] = useState(false)
    // let api = useAxios()
    
    
    let params = useParams()
    let {api, comments, setComments, getComments, posts } = useContext(PostContext)
    console.log(posts)
    // const postnu = posts.indexOf(posts.id === params.id)
    // console.log(postnu)
    // const findpost = (postlist, magnu) =>{
    //     let retnu = -1;
    //     for (let i = 0; i < postlist.length; i++){
    //         if (postlist[i]["id"] === magnu){
    //             retnu = i
    //             break    
    //         }
    //      return retnu
    //     }
    // }

    // const indofpost = findpost(posts, params.id)
    //const thenu= posts.find(post => post['id'] === `${params.id}`)
    posts.find(({ id }) => {
        console.log(id, params.id)
        return id == params.id
   })
   console.log(typeof(params.id))
//     console.log(posts)
//     console.log(typeof(posts))
//     console.log(params.id)

    const thenu= posts.find( ({ id }) => `${id}` === params.id)
    console.log(thenu)
//     const filtnu = posts.filter((post) => post.id === params.id)
//     console.log(filtnu)

//     const inventory = [
//         {id: 21, name: 'apples', quantity: 2},
//         {id: 27, name: 'bananas', quantity: 0},
//         {id: 29, name: 'cherries', quantity: 5}
//       ];
// console.log(typeof(inventory))      

//     console.log(inventory.find(invent => invent.id === 29 ))


// const index = posts.findIndex((post) => post['id'] === params.id)
// console.log(index)
    
console.time("find")
//Find method goes here

    useEffect(()=> {
        fetchPost()    
    }, [])
    // console.time(fetchPost)
    console.timeEnd("find")

    useEffect(()=> {
        getComments(params.id)
    }, [])

    // let fetchPost = async() =>{
    //         let response = await api.get(`/post/post/${params.id}`)       
    //         if(response.status === 200){
    //         setNotecontent(response.data)
    //         // console.log(response.data)
    //     }
    // }

    let fetchPost = async() =>{
        if (posts.length === 0){
            let response = await api.get(`/post/post/${params.id}`)       
            if(response.status === 200){
            setNotecontent(response.data)
            // console.log(response.data)
        } 
        }
        else {
            console.log('Hope working')
            const result = posts.find(({id}) => `${id}` === params.id);
            console.log('not working')
            setNotecontent(result)
        }        
    }

    // let getPost = (nu) => {
    //     setNotecontent(posts[nu])
    // }

    // const result = inventory.find( ({ name }) => name === 'cherries' );

    


    const PostLike = async() => {
        console.log('clicked like button')
        let response = await api.get(`like/post/?getid=${params.id}`)
        setIsliked(isliked? false : true)
        console.log(response.date)
        
    }

    // let buttontag = isliked? "Dislike" : "Like"
    



    return (
        <div>
            

            <div className='border border-dark border-end-0 border-start-0 text-start p-2 ' style={{'fontSize' : '95%'}}>
            <Link to="/" className=' my-3 mx-3 align-baseline'><i class="ri-arrow-left-line"></i></Link>
            <div className='badge bg-primary text-wrap my-1'>{notecontent.author}</div>
                <br></br>
                    {notecontent.content} 

                    {/* <hr/> */}
                {/* <button onClick={PostLike} type="submit" className="btn btn-primary btn-sm mx-3" >
                    {buttontag}
                </button> 
                            */}
                            <br></br>
                <hr></hr>
                <div className='d-flex justify-content-around mt-1'>

                < AddComment notecontent = {notecontent}/>
                <i class="ri-thumb-up-line"></i>
                <i class="ri-share-forward-fill"></i>

                </div>
               
                
                
            </div>
            



        <div className='d-flex justify-content-between ms-4 mt-3'>
        <h4 className='justify-content-start'>Comments</h4>
           


        </div>
        

        

         <div className = "mb-5">                
         {comments.length === 0 ?     
            'No Comments to display' : comments.map( (comment) => (
             <div key={comment.id}>
                 <Comment comment = {comment} />
             </div>
         ))}
        </div>


        </div>
        
     
    )
}
