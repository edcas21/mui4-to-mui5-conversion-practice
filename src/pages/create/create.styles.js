/*
Instead of this: 
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    marginBottom: 1,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  details: {
    marginBottom: 20,
  }
})
*/

// Do this. Create an object with the styling properties you want to use
const createStyles = {
  title: {
    marginBottom: 1,
  },
  field: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
  },
  details: {
    marginBottom: "20px",
  },
};

export default createStyles;
