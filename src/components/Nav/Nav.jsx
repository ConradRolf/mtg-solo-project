import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CastleIcon from '@mui/icons-material/Castle';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import HikingIcon from '@mui/icons-material/Hiking';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import HiveIcon from '@mui/icons-material/Hive';
import { useHistory } from 'react-router-dom';

function Nav() {
  const user = useSelector((store) => store.user);

  const drawerWidth = 240;

  const history = useHistory();

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    }),
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            The Gathering
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistant"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem disablePadding>
            <ListItemButton component={Link} to='/home' onClick={handleDrawerClose}>
              <ListItemIcon>
                {<CastleIcon />}
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to='/search' onClick={handleDrawerClose}>
              <ListItemIcon>
                {<SearchIcon />}
              </ListItemIcon>
              <ListItemText primary='Search' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to='/deck' onClick={handleDrawerClose}>
              <ListItemIcon>
                {<AutoAwesomeMotionIcon />}
              </ListItemIcon>
              <ListItemText primary='My Decks' />
            </ListItemButton>
          </ListItem>

        </List>
        <Divider />
        <List>

          <ListItem disablePadding>
            <ListItemButton component={Link} to='/about' onClick={handleDrawerClose}>
              <ListItemIcon>
                {<HiveIcon />}
              </ListItemIcon>
              <ListItemText primary='About Us' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to='/info' onClick={handleDrawerClose}>
              <ListItemIcon>
                {<InfoIcon />}
              </ListItemIcon>
              <ListItemText primary='Information' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={LogOutButton} onClick={handleDrawerClose}>
              <ListItemIcon>
                {<HikingIcon />}
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
    </Box >
  );
}

export default Nav

{/*onClick={history.push(`/${text}`)}

 </ListItem>
          {['Home', 'Search', 'Deck', 'Log Out'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} onClick={history.push(`/${text}`)}/>
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Info', 'About'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} onClick={history.push(`/${text}`)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

{/* // return (
//   <div className="nav">
//     <Link to="/home">
//       <h2 className="nav-title">The Gathering</h2>
//     </Link>
//     <div>
//       {/* If no user is logged in, show these links
//       {!user.id && (
//         // If there's no user, show login/registration links
//         <Link className="navLink" to="/login">
//           Login / Register
//         </Link>
//       )}

//       {/* If a user is logged in, show these links
//       {user.id && (
//         <>
//           <Link className="navLink" to="/user">
//             Home
//           </Link>

//           <Link className="navLink" to="/search">
//             Search
//           </Link>

//           <Link className="navLink" to="/deck">
//             My Deck
//           </Link>

//           <Link className="navLink" to="/info">
//             Info Page
//           </Link>

//           <LogOutButton className="navLink" />
//         </>
//       )}

//       <Link className="navLink" to="/about">
//         About
//       </Link>
//     </div>
//   </div>
// );
// }

// export default Nav; */}