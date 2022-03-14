import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/router';
import Notificationbar from '../components/Notificationbar'
import HomeIcon from '@mui/icons-material/Home';
import AddCommentSharpIcon from '@mui/icons-material/AddCommentSharp';
import EditIcon from '@mui/icons-material/Edit';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';






const ResponsiveAppBar = () => {
    const [user, setUser] = React.useState(false)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [token, setToken] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter()
    const [success, setSuccess] = React.useState(false)

    React.useEffect(() => {
        { sessionStorage.getItem('username') && setUser(true) }
        { sessionStorage.getItem('token') && setToken(sessionStorage.getItem('token')) }
        { sessionStorage.getItem('token') && setUsername(sessionStorage.getItem('username')) }

    })
    const logOut = () => {
        axios.post('https://chikubodana.pythonanywhere.com/api/logoutall/', null, { headers: { 'Authorization': `Token ${token}` } }).then((res) => {
            setUser(false)
            sessionStorage.clear()
            setSuccess(true)
            router.push('/')
            setTimeout(() => window.location.reload(), 1400)



        }).catch(err => err)

    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        < div className='font-body h-full'>
            <AppBar position="static" color='default' >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            className='font-body text-3xl'
                        >
                            ThoughtBook
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link href={'/'}>
                                        <a>

                                            <Typography textAlign="center" className='font-body'> <HomeIcon /> HOME</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu} className={`${!user && 'hidden'}`}>
                                    <Link href={'/addthought'} >
                                        <a >
                                            <Typography textAlign="center" className='font-body'><AddCommentSharpIcon /> ADD THOUGHT</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu} className={`${!user && 'hidden'}`} >
                                    <Link href={'/editthought'}>
                                        <a>
                                            <Typography textAlign="center" className='font-body' ><EditIcon /> EDIT THOUGHTS</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu} className={`${user && 'hidden'}`}>
                                    <Link href={'/login'}>
                                        <a>
                                            <Typography textAlign="center" className='font-body'><AccessibilityIcon /> LOGIN</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu} className={`${user && 'hidden'}`}>
                                    <Link href={'/signup'}>
                                        <a>
                                            <Typography textAlign="center" className='font-body' ><PersonAddAltRoundedIcon /> SIGNUP</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            className='font-body text-2xl'
                        >
                            ThoughtBook
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                            <Link href={'/'} >
                                <a>

                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'info', display: 'block' }}
                                        className='font-body no-underline'
                                        

                                    >
                                        <HomeIcon /> HOME
                                    </Button>
                                </a>
                            </Link>
                            <Link href={'/addthought'} >
                                <a>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'info', display: 'block' }}
                                        className={`${!user && 'hidden'} font-body no-underline`}

                                    >
                                        <AddCommentSharpIcon /> ADD THOUGHT
                                    </Button>
                                </a>
                            </Link>
                            <Link href={'/editthought'} >
                                <a>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'info', display: 'block' }}
                                        className={`${!user && 'hidden'} font-body no-underline`}

                                    >
                                        <EditIcon /> EDIT THOUGHTS
                                    </Button>
                                </a>
                            </Link>

                            <Link href={'/login'} >
                                <a>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'info', display: 'block' }}
                                        className={`${user && 'hidden'} font-body no-underline`}

                                    >
                                        <AccessibilityIcon /> LOGIN
                                    </Button>
                                </a>
                            </Link>
                            <Link href={'/signup'} >
                                <a>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'info', display: 'block' }}
                                        className={`${user && 'hidden'} font-body no-underline`}

                                    >
                                        <PersonAddAltRoundedIcon /> SIGNUP
                                    </Button>
                                </a>
                            </Link>

                        </Box>

                        <Box sx={{ flexGrow: 0 }} className={`${!user && 'hidden'}`}>
                            <Tooltip title="User Options">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <AccountBoxIcon color='primary' className='w-8 h-10 md:w-14 md:h-14 ' />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" className='font-body' onClick={logOut}><LogoutIcon /> LOGOUT</Typography>

                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link href={'/changepassword'}>
                                        <a>
                                            <Typography textAlign="center" className='font-body'><LockResetSharpIcon /> CHANGE PASSWORD</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>
                            </Menu>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <hr />
           
            {success && <Notificationbar msg={"Logging Out"} alert={'info'} />}
        </div>
    );
};
export default ResponsiveAppBar;
