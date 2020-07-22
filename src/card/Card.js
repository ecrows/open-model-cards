import React from 'react'
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
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader';

import ReactMarkdown from 'react-markdown'

import './Card.css';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
  },
  drawerRoot: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: "100%",
    },
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
    width: drawerWidth,
    flexShrink: 0,
  },
  listItemText:{
    fontSize:'12px'
  },
  drawerPaper: {
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Card(props) {
  const classes = useStyles();
  const data = props.data;
  return (
    <div className={classes.drawerRoot}>
      <CssBaseline />
      <AppBar
        position="absolute" // was fixed
        className={classes.appBar}
        style={{backgroundColor: data.color}}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {data.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <div className="drawer-list">
          <List>
            {data.bullets.map(b => (
              <a className="drawer-links" href={"#"+b.heading}>
                <ListItem button key={b.heading}>
                    <ListItemText primary={b.heading} className={classes.listItemText} disableTypography/>
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
          <ListSubheader>Explore Models</ListSubheader>
            <ListItem button key={"sample"}>
              <ListItemText primary={"Another model here"} className={classes.listItemText} disableTypography/>
            </ListItem>
          </List>
        </div>
      </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />
          <div className="card-navigation">
          <div className="card-content">
            <div className={classes.gridRoot}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className="point-body">
                    <ReactMarkdown source={data.description}/>
                  </div>
                  </Grid>
                    {
                      data.bullets.map(b => 
                      <Grid item xs={12} sm={6} key={b.heading}>
                      <div className="point-heading" id={b.heading}>{b.heading}</div>
                      <div className="point-body">
                        {b.points.map((a,i) =>
                          <ReactMarkdown key={b.heading+i} source={a}/>
                        )}
                      </div>
                    </Grid>
                    )
                  }
                </Grid>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}

export default Card;
