import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  icon: {
    marginLeft: '20px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: 'none',
    },
  },
  connectWalletButton: {
    padding: '0px 15px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12px',
      whiteSpace: 'normal',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 40px',
    },
  },
  connectKeplrButton: {
    padding: '0px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 55px',
    },
  },
  connectButterButton: {
    padding: '0px 15px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 30px',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    padding: '17px 24px',
    [theme.breakpoints.down('xs')]: {
      left: '250px',
    },
  },
  walletButton: {
    border: 'solid 1px #D9D9D9',
    borderRadius: '24px',
    width: '70px',
    height: '70px',
    fontSize: '14px',
    justifyContent: 'left',
    overflow: 'visible',
    background: '#D9D9D9',
    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '&:focus': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '24px',
      width: '100px',
      height: '100px',
    },
  },
  header: {
    alignItems: 'center',
    padding: '72px 32px 32px 19px',
    [theme.breakpoints.up('md')]: {
      padding: '72px 32px 32px 37px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '330px',
      [theme.breakpoints.up('md')]: {
        width: '600px',
      },
    },
  },
  dialogContent: {
    display: 'inline-flex',
    paddingBottom: theme.spacing(3),
    overflow: 'visible',
  },
  label: {
    fontSize: '16px',
    marginTop: theme.spacing(20),
    marginLeft: '-10px',
    textAlign: 'left',
    lineHeight: 'normal',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20),
    },
  },
  walletConnectLabel: {
    fontSize: '16px',
    marginTop: '182px',
    marginLeft: '-10px',
    textAlign: 'left',
    lineHeight: 'normal',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20),
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '115px 16px 16px 16px',
  },
  actionsButton: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px 16px',
    width: '103px',
    height: '40px',
    background: '#D9D9D9',
    borderRadius: '8px',
    color: '#000000',
    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      width: '114px',
      height: '44px',
    },
    [theme.breakpoints.down('xs')]: {
      left: '54px',
    },
  },
  networkList: {
    width: '20%',
    opacity: 0,
    visibility: 'hidden',
    transition: '0.2s ease-in-out',
    position: 'fixed',
    right: 60,
    '&.open': {
      opacity: '95%',
      visibility: 'visible',
    },
  },
  avatar: {
    margin: '0px 20px 0px 5px',
    borderRadius: '100px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: 'none',
    },
  },
}));

export const useStyles = () => styles();
