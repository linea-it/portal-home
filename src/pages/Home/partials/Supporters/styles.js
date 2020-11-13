import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
  carouselItem: {
    maxWidth: '150px',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
  },
}));

export default styles;
