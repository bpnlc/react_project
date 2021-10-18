import './App.css';
import SideMenu  from '../components/SideMenu'
import Header from '../components/Header'
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core'
import PageHeader from '../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Employees from '../pages/Employees/Employees';
const theme = createMuiTheme({
  palette:{
      primary:{
          main: '#FF0000'
          // doesn't work red ,type hex value
      }
  }
})
const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider>
    <SideMenu />
    <div className={classes.appMain}>
      <Header />
      <Employees />
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
