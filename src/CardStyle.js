import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const Styles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  card: {
    transformStyle: "preserve-3d",
    height: "auto",
    width: "35rem",
    borderRadius: "30px",
    padding: "0rem 5rem",
    boxShadow:
      "0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)",
    paddingBottom: "10vh",
  },
  sneaker: {
    minHeight: "35vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: "15rem",
    height: "15rem",
    background:
      "linear-gradient(to right, rgba(24, 24, 29, 0.75), rgba(147, 187, 226, 0.75))",
    position: "absolute",
    borderRadius: "50%",
    zIndex: 1,
  },
  img: {
    width: "20rem",
    zIndex: 2,
    transition: "all 0.75s ease-out",
  },
  infoH1: {
    fontSize: "3rem",
    transition: "all 0.75s ease-out",
  },
  infoH3: {
    fontSize: "1.3rem",
    padding: "2rem 0rem",
    color: "#585858",
    fontWeight: "lighter",
    transition: "all 0.75s ease-out",
  },
  purchase: {
    marginTop: "5rem",
    transition: "all 0.75s ease-out",
  },
  pButton: {
    width: "100%",
    padding: "1rem 0rem",
    background: "#252431",
    fontWeight: "bolder",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  drawerTitle: {
    textAlign: "left",
  },
  drawerTitleSwitch: {
    textAlign: "left",
    padding: "0 1.4%",
  },
  textField: {
    marginTop: 15,
  },
  boxDrawer: {
    padding: "0 3% 0 3%",
  },
  switchDrawer: {
    marginTop: 15,
    textAlign: "left",
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    background:
      "linear-gradient(to right, rgba(147, 187, 226, 0.14), rgba(24, 24, 29, 0.14))",
  },
  avatarBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 3% 0 3%",
    marginTop: 12,
  },
  avatarButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 3% 0 3%",
    marginTop: 2,
    marginBottom: 8,
  },
  alertPosition: {
    position: "fixed",
    top: "8px",
    right: "16px",
    marginTop: "10px",
    marginRight: "10px",
    zIndex: 9999,
  },
  botton: {
    position: "fixed",
    width: drawerWidth,
    bottom: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(2),
    width: drawerWidth,
    fontWeight: '600'
  },
}));

export default Styles;
