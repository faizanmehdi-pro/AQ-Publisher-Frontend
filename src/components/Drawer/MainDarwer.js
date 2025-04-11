import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Viewer icon
import EditIcon from '@mui/icons-material/Edit'; // Edit Details icon
import BarChartIcon from '@mui/icons-material/BarChart'; // Analyze icon
import BuildIcon from '@mui/icons-material/Build'; // ToolKit icon
import AssignmentIcon from '@mui/icons-material/Assignment'; // Workflow icon
import Avatar from '@mui/material/Avatar'; // User profile image
import Tooltip from '@mui/material/Tooltip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Dropdown icon

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextSnippetIcon from '@mui/icons-material/TextSnippet'; // Text File Analysis icon
import FilePresentIcon from '@mui/icons-material/FilePresent'; // File Operation icon
import FolderIcon from '@mui/icons-material/Folder'; // File Checker icon
import SortIcon from '@mui/icons-material/Sort'; // File Sorter icon
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'; // Rename File icon
import FileUploadIcon from '@mui/icons-material/FileUpload'; // Insert Data icon
import ErrorIcon from '@mui/icons-material/Error'; // Error Correction icon
import ContentPasteIcon from '@mui/icons-material/ContentPaste'; 
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import TaskIcon from '@mui/icons-material/Task';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';


const topbarColor = '#1976d2'; // Replace this with the desired color code
const inactiveColor = '#000'; // Color for inactive links
const drawerWidth = 290;

const getTitleFromPath = (path) => {
  switch (path) {
    case '/':
      return 'Viewer';
    case '/viewer':
      return 'Viewer';
    case '/editdetails':
      return 'Edit Details';
    case '/analyze':
      return 'Analyze';
    case '/ocr':
      return 'OCR';
    case '/convert-to-searchable':
      return 'Convert to Searchable';
    case '/remove-duplicates':
      return 'Remove Duplicates';
    case '/workflow':
      return 'Workflow';
    case '/file-checker':
      return 'File Checker';
    case '/file-sorter':
      return 'File Sorter';
    case '/convert':
      return 'Convert';
    case '/text-file-analysis':
      return 'Text File Analysis';
    case '/file-operation':
      return 'File Operation';
    case '/move-content':
      return 'Tool & Move Content';
    case '/error-correction':
      return 'Error Correction';
    case '/rename-file':
      return 'Rename File';
    case '/insert-data':
      return 'Insert Data';
    case '/profile':
      return 'Profile';
    default:
      return 'Page';
  }
};


function MainDrawer({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [showToolkitOptions, setShowToolkitOptions] = React.useState(false); // State for dropdown
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleToolkitOptions = () => {
    setShowToolkitOptions((prev) => !prev);
  };

  const settings = ['Profile', 'Logout'];
  const toolkitItems = [
    { label: 'Convert to Searchable', path: '/convert-to-searchable', icon: <PublishedWithChangesIcon /> },
    { label: 'Remove Duplicates', path: '/remove-duplicates', icon: <PlaylistRemoveIcon /> },
    { label: 'File Checker', path: '/file-checker', icon: <TaskIcon /> },
    { label: 'File Sorter', path: '/file-sorter', icon: <SortIcon /> },
    { label: 'Convert', path: '/convert', icon: <ChangeCircleIcon /> },
    { label: 'Text File Analysis', path: '/text-file-analysis', icon: <TextSnippetIcon /> },
    { label: 'File Operation', path: '/file-operation', icon: <FilePresentIcon /> },
    { label: 'Tool & Move Content', path: '/move-content', icon: <ContentPasteIcon /> },
    { label: 'Error Correction', path: '/error-correction', icon: <ErrorIcon /> },
    { label: 'Rename File', path: '/rename-file', icon: <DriveFileRenameOutlineIcon /> },
    { label: 'Insert Data', path: '/insert-data', icon: <FileUploadIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontWeight: 900,
            color: topbarColor,
          }}
        >
          AQ PUBLISHER
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem key="Viewer" disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              color: currentPath === '/' ? topbarColor : inactiveColor,
            }}
          >
            <ListItemIcon sx={{ color: currentPath === '/' ? topbarColor : inactiveColor }}>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText
              primary="Viewer"
              primaryTypographyProps={{
                style: { color: currentPath === '/' ? topbarColor : inactiveColor }
              }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem key="Edit Details" disablePadding>
          <ListItemButton
            component={Link}
            to="/editdetails"
            sx={{
              color: currentPath === '/editdetails' ? topbarColor : inactiveColor,
            }}
          >
            <ListItemIcon sx={{ color: currentPath === '/editdetails' ? topbarColor : inactiveColor }}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText
              primary="Edit Details"
              primaryTypographyProps={{
                style: { color: currentPath === '/editdetails' ? topbarColor : inactiveColor }
              }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem key="Analyze" disablePadding>
          <ListItemButton
            component={Link}
            to="/analyze"
            sx={{
              color: currentPath === '/analyze' ? topbarColor : inactiveColor,
            }}
          >
            <ListItemIcon sx={{ color: currentPath === '/analyze' ? topbarColor : inactiveColor }}>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText
              primary="Analyze"
              primaryTypographyProps={{
                style: { color: currentPath === '/analyze' ? topbarColor : inactiveColor }
              }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={toggleToolkitOptions}
            sx={{ color: inactiveColor }}
          >
            <ListItemIcon sx={{ color: inactiveColor }}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="ToolKit" />
            <ArrowDropDownIcon />
          </ListItemButton>
        </ListItem>
        {showToolkitOptions && (
          <List component="div" disablePadding>
            {toolkitItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    paddingLeft: 4, // Indent for dropdown items
                    color: currentPath === item.path ? topbarColor : inactiveColor,
                  }}
                >
                  <ListItemIcon sx={{ color: currentPath === item.path ? topbarColor : inactiveColor }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      style: { color: currentPath === item.path ? topbarColor : inactiveColor }
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        <ListItem key="Workflow" disablePadding>
          <ListItemButton
            component={Link}
            to="/workflow"
            sx={{
              color: currentPath === '/workflow' ? topbarColor : inactiveColor,
            }}
          >
            <ListItemIcon sx={{ color: currentPath === '/workflow' ? topbarColor : inactiveColor }}>
              <AssignmentIcon /> {/* Workflow icon */}
            </ListItemIcon>
            <ListItemText
              primary="Workflow"
              primaryTypographyProps={{
                style: { color: currentPath === '/workflow' ? topbarColor : inactiveColor }
              }} 
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: topbarColor, // Set the background color of the topbar
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Display the active route title in the topbar */}
          <Typography variant="h6" noWrap component="div">
            {getTitleFromPath(location.pathname)}
          </Typography>
          <Box sx={{ flexGrow: 0, ml: 'auto' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Profile" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <ListItemButton
                  component={Link}
                  to="/profile"
                  sx={{
                  color: currentPath === '/profile' ? topbarColor : inactiveColor,
                  }}
                  >
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </ListItemButton>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

MainDrawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainDrawer;
