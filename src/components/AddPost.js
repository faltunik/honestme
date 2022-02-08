import React, {useState, useContext} from 'react';
import {Modal} from 'react-bootstrap'
import useAxios from '../utils/useAxios';
import PostContext from '../context/PostContext';


export default function AddPost() {
    let {AddPost, modal, setModal, postfield, setPostfield} = useContext(PostContext)

    return (
        <div>
            <button type="button" className="btn btn-light btn-sm mx-3" onClick={() => setModal(true)}>
            <i className="ri-add-circle-fill"></i>
            </button>
            <Modal style={{backgroundColor: 'black'}}  centered show={modal} onHide={() => setModal(false)}> {/* () => setModal(false) */}
                <Modal.Header closeButton>
                    <Modal.Title className='text-dark'>Add Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={AddPost} >
                        <div className="form-group">
                            <div className = 'my-3'>
                            <textarea
                                type="text"
                                className="form-control"
                                name="content"
                                value = {postfield}
                                onChange={(e)=> setPostfield(e.target.value)}
                                rows="5"
                            >
                            </textarea>
                            </div>
                        </div>
                        <p className="text-muted">
                          {postfield.length}/600
                        </p>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary my-3">
                                Submit
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            
        </div>
    )
}
