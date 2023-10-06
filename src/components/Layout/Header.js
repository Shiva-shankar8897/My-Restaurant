import React, { useState } from 'react'
import { AppBar, Typography, Box, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import '../../styles/Headerstyle.css'
import logo from '../../images/logo.svg'

function Header() {
    const [mobileopen, setmobileopen] = useState(false)
    //toggle
    const handletoggle = () => {
        setmobileopen(!mobileopen)
    }
    // menu
    const drawer = (
        <Box onClick={handletoggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1, my: 2 }}>
                <img src={logo} alt='logo' height={'70'} width={'200'} />  <nbsp />
            </Typography>
            <Divider />
            <ul className='mobile-nav'>
                <li>
                    <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    )
    return (
        <div>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}
                            onClick={handletoggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            <img src={logo} alt='logo' height={'70'} width={'250'} /> <nbsp />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='nav-menu'>
                                <li>
                                    <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer variant='temporary' open={mobileopen} onClose={handletoggle} sx={{
                        display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: '240px'
                        }
                    }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </div>
    )
}

export default Header
