import React from 'react';
import { Link } from 'react-router-dom';

export default function Comment({comment}) {
    return (
        <div className='border border-dark border-end-0 border-start-0 ms-1 text-start p-1'  style={{'fontSize' : '95%'}}>
            <div className='text-light'> 
            <div className='badge bg-success text-wrap my-1'>{comment.author}</div>
            <br></br>
             {comment.body} </div>  
        </div>
    )
    }







