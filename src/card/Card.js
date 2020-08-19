import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuIcon from '@material-ui/icons/Menu';
import LinkIcon from '@material-ui/icons/Link';
import HomeIcon from '@material-ui/icons/Home';
import PrintIcon from '@material-ui/icons/Print';

import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";

import Footer from '../core/Footer';
import './Card.css';

const drawerOffset = "12%";
const drawerWidth = 280;
const maxContentWidth = "82%";


const useStyles = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
  },
  gridItem: {
    breakInside: 'avoid',
    breakBefore: 'recto',
    display: 'block',
    position: 'relative',
  },
  root: {
    display: 'flex',
  },
  menuButton: {
    '@media print' : {
      display: "none"
    },
    [theme.breakpoints.up('md')]: {
      display: "none"
    },
    marginRight: theme.spacing(2),
    width: "auto",
    cursor: "pointer"
  },
  appBarButton: {
    '@media print' : {
      display: "none"
    },
    width: "auto",
    cursor: "pointer"
  },
  appBarHeading: {
    flexGrow: 1,
  },
  appBar: {
    '@media print' : {
      boxShadow: 'none',
      color: 'black',
      marginLeft: 0,
      width: "100%",
      maxWidth: "100%",
      marginTop: "1em"
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: "100%",
      maxWidth: "100%"
    },
    left: 0,
    maxWidth: maxContentWidth,
    width: "100%"
  },
  drawer: {
    '@media print' : {
      width: 0,
    },
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
    width: drawerWidth,
    flexShrink: 0,
  },
  listItemText:{
    fontSize:'12px'
  },
  drawerRoot: {
    '@media print' : {
      marginLeft: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
    marginLeft: drawerOffset
  },
  drawerPaper: {
    '@media print' : {
      width: 0,
    },
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
    width: drawerWidth,
  },
  paperAnchorLeft: {
    left: "auto",
    right: "auto",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    display: "flex",
    //backgroundColor: theme.palette.background.default,
    backgroundColor: "white",
    [theme.breakpoints.down('sm')]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: "100%",
    },
    maxWidth: maxContentWidth,
    //padding: theme.spacing(3),
  },
}));

function Card(props) {
  const classes = useStyles();
  const [justCopied, setJustCopied] = useState(false);
  const data = props.data;
  const currentUrl = window.location.href;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          root: classes.drawerRoot,
          paper: classes.drawerPaper,
          paperAnchorLeft: classes.paperAnchorLeft,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <div className="back-button-box">
            <div className="back-sub-box">
              <Link to="/">
                <span className="home-link"><HomeIcon/></span>
              </Link>
            </div>
          </div>
        </div> 
        <Divider />
        <div className="drawer-list">
          <List>
            <ListSubheader>Sections</ListSubheader>
            {data.sections.map(b => (
              b.heading !== "" &&
              <a className="drawer-links" href={"#"+b.heading} key={b.heading}>
                <ListItem button>
                    <ListItemText primary={b.heading} className={classes.listItemText} disableTypography/>
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
            <ListSubheader>Explore Models</ListSubheader>
            {props.all_cards.map(c =>
              <Link to={"./"+c.key} key={c.key} className="drawer-links">
                <ListItem button>
                  <ListItemText primary={c.card.title} className={classes.listItemText} disableTypography/>
                </ListItem>
              </Link> 
              )}
            </List>
          </div>
      </Drawer>
      <div className="rightPane">
        <AppBar
          position="relative" // was fixed
          className={classes.appBar}
          style={{backgroundColor: data.color}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.appBarHeading}>
              {data.title}
            </Typography>
            <Tooltip title={justCopied ? "Link copied!" : "Copy link to clipboard"} aria-label="copy link to clipboard" onOpen={() => setJustCopied(false)}>
            <CopyToClipboard text={currentUrl} className={classes.appBarButton} onCopy={() => setJustCopied(true)}>
              <IconButton aria-label="copy URL to clipboard" color="inherit">
                <LinkIcon />
              </IconButton>
            </CopyToClipboard>
            </Tooltip>
            <Tooltip title="Send to PDF or Printer" aria-label="send to pdf or printer">
            <IconButton className={classes.appBarButton} aria-label="print page" color="inherit" onClick={window.print}>
                <PrintIcon/>
            </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
          <main className={classes.content}>
          <div className={classes.toolbar} />
            <div className="card-page">
            <div className="card-content">
              <div className={classes.gridRoot}>
                <Grid container spacing={5}>
                  <Grid item xs={12} classes={{item: classes.gridItem}}>
                    <div className="point-body">
                      <ReactMarkdown source={data.page_heading}/>
                    </div>
                    </Grid>
                      {
                        data.sections.map((b, i) => 
                        <Grid item xs={12} sm={6} key={i + b.heading} classes={{item: classes.gridItem}}>
                        <div className="point-heading" id={b.heading}>{b.heading ? b.heading : "\u00a0"}</div>
                        <div className="point-body">
                          <ReactMarkdown source={b.content}/>
                        </div>
                      </Grid>
                      )
                    }
                  </Grid>
                </div>
              </div>
              <Footer/>
            </div>
        </main>
      </div>
    </div>
  );
}

export default Card;
