import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Navbar, Container} from 'react-bootstrap'
import AddPost from './AddPost'


export default function Navbar2() {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
           <Navbar bg="dark" variant="dark">
                <Container>
                    
                {user? (
                    <>
                    <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                <Navbar.Collapse className="justify-content-end"> 
                    <Navbar.Text>
                        
                            <p  onClick={logoutUser}>Logout</p>                            
                    </Navbar.Text> 
                </Navbar.Collapse>
                </>                  
                    ) :
                    (
                        <Navbar.Collapse className="justify-content-end">
                    
                        <Navbar.Text>
                            <Link to ="/register">Create Account</Link>
                            <span> | </span>
                            <Link to = '/login'> Login </Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    )
               
                 }
                </Container>
            </Navbar>
        </div>
    )
}
