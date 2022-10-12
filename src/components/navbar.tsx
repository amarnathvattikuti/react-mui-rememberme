import React, { useContext, useState } from 'react'
//import PropTypes from 'prop-types';
import { store } from '../App'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avataricon from '../images/avatar-anika_visser.png'
import Ukflag from '../images/uk_flag.svg'
import Badge from '@mui/material/Badge'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import DrawerCont from './subComponent/drawer'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 280
const settings = ['Profile', 'Settings', 'Change organisation']

/* eslint-disable @typescript-eslint/no-explicit-any */
function ResponsiveDrawer(props: any) {
  const navigate = useNavigate()
  const { token, setToken, remember, setRemember, show, setShow } =
    useContext(store)
  console.log(token, show, remember)
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const [anchorElUser, setAnchorElUser] = useState<Element | null>(null)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleOpenUserMenu = (e: React.SyntheticEvent<Element>) => {
    e.preventDefault()
    if (e.target instanceof Element) {
      setAnchorElUser(e.target)
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const drawer = <DrawerCont />

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { xl: `calc(100% - ${drawerWidth}px)` },
            ml: { xl: `${drawerWidth}px` },
          }}
          className="bg-white shadow"
        >
          <Toolbar>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'inline-flex', xl: 'flex' } }}
            >
              <IconButton
                color="default"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: 'block', xl: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <img src={Ukflag} alt="uk-flag" className="w-5" />
              </IconButton>
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton>
                <GroupOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new notifications"
                color="default"
                className="mr-3"
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={Avataricon} />
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
                <MenuItem className="my-10 mx-30">
                  <Avatar
                    alt="Remy Sharp"
                    src={Avataricon}
                    style={{ marginRight: '15px' }}
                  />{' '}
                  Anika visser <br />
                  <span className="subTitle">Acme Inc</span>
                </MenuItem>
                <Divider className="py-10 border-solid border-secondary" />
                {settings.map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleCloseUserMenu}
                    className="px-15 py-7"
                  >
                    {index === 0 ? <AccountCircleIcon /> : null}
                    {index === 1 ? <SettingsIcon /> : null}
                    {index === 2 ? <CompareArrowsOutlinedIcon /> : null}
                    <Typography textAlign="center">{setting}</Typography>
                    {}
                  </MenuItem>
                ))}
                <Divider className="py-10 border-solid border-secondary" />
                <MenuItem
                  className="py-1 px-3"
                  onClick={() => {
                    setToken(''),
                      localStorage.removeItem('Localtoken'),
                      navigate('/'),
                      setShow(false),
                      setRemember(false)
                  }}
                >
                  <LogoutOutlinedIcon className="mr-3" /> Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { xl: drawerWidth }, flexShrink: { xl: 0 } }}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', xl: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', xl: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default ResponsiveDrawer
