import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Header.css';

function Header() {

    const user = useSelector((store) => store.user);

    return (


            <div className="nav">
                <Link to="/home">
                    <h2 className="nav-title"> Wuttin the Deck?</h2>
                </Link>
                <div>
                    {/* If no user is logged in, show these links */}
                    {!user.id && (
                        // If there's no user, show login/registration links
                        <Link className="navLink" to="/login">
                            Login
                        </Link>
                    )}

                    {/* If a user is logged in, show these links */}
                    {user.id && (
                        <>

                            <LogOutButton className="navLink" />
                        </>
                    )}

                    <Link className="navLink" to="/about">
                        About
                    </Link>
                </div>
            </div>
    );

}

export default Header