import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  initContainer: theme.initContainer,
  textFields: {
    marginBottom: theme.spacing(4),
  },
  grid: {
    margin: 'auto',
  },
  form: {
    marginTop: 40,
    margin: 'auto',
    width: '80%',
  },
}));

export default styles;
