import React, { useState, useRef } from "react";
import img from "./Assets/Link-BotW.png";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Grid,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  TextField,
  Switch,
  Avatar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Styles from "./CardStyle";
import clsx from "clsx";
import { definitionsState } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import { useDropzone } from "react-dropzone";

const Card = () => {
  const classes = Styles();
  const definitions = useSelector(
    (state) => state.definitions.definitionsState
  );
  const theme = useTheme();
  const dispatch = useDispatch();
  const dispatchDefinitions = (value) => dispatch(definitionsState(value));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [values, setValues] = useState({
    title: definitions.title,
    info: definitions.info,
    buttonText: definitions.buttonText,
    effect3D: definitions.effect3D,
    file: definitions.file,
    alert: false,
  });
  const [alert, setAlert] = useState(false);
  const container = useRef();
  const card = useRef();
  const sneaker = useRef();
  const description = useRef();
  const title = useRef();
  const purchase = useRef();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]:
        event.target.name !== "effect3D"
          ? event.target.value
          : event.target.checked,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      !values.alert && setAlert(true);
      setValues({
        ...values,
        file: acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
        alert: true,
      });
    },
  });

  const images = values.file.map((file) => {
    return (
      <img
        key={file.name}
        src={file.preview}
        alt={`${file.name}-preview`}
        className={classes.img}
      />
    );
  });

  const dispatchValues = () => {
    const payload = { ...values, file: [], alert: false };
    !payload.file.length && dispatchDefinitions(payload);
  };

  const cMouseMove = (move) => {
    const xAxis = (window.innerWidth / 2 - move.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - move.pageY) / 25;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const cMouseEnter = () => {
    card.current.style.transition = "none";
    title.current.style.transform = "translateZ(150px)";
    sneaker.current.style.transform = "translateZ(200px) rotateZ(-3deg)";
    description.current.style.transform = "translateZ(125px)";
    purchase.current.style.transform = "translateZ(75px)";
  };

  const cMouseLeave = () => {
    card.current.style.transition = "all 0.5s ease";
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.current.style.transform = "translateZ(0px)";
    sneaker.current.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.current.style.transform = "translateZ(0px)";
    purchase.current.style.transform = "translateZ(0px)";
  };

  return (
    <Grid container spacing={3}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen()}
            edge="start"
            className={clsx(classes.menuButton, openDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.drawerHeader}>
          <Typography variant="h6" className={classes.drawerTitle}>
            Definitions
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <Box className={classes.avatarBox}>
          {!images.length ? (
            <Avatar alt="Link-BotW" src={img} className={classes.large} />
          ) : (
            <Avatar
              alt={`${images[0].key}-preview`}
              src={images[0].props.src}
              className={classes.large}
            />
          )}
        </Box>
        <Box className={classes.avatarButton}>
          <Box {...getRootProps()}>
            <input {...getInputProps()} />
            <Button onClick={() => getInputProps()} color="primary">
              Change Image
            </Button>
          </Box>
        </Box>
        <Box className={classes.boxDrawer}>
          <TextField
            fullWidth
            size="small"
            color="primary"
            label="Product Title"
            name="title"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            value={values.title}
          />
          <TextField
            fullWidth
            size="small"
            color="primary"
            label="Product Info"
            name="info"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            value={values.info}
          />
          <TextField
            fullWidth
            size="small"
            color="primary"
            label="Button Text"
            name="buttonText"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            value={values.buttonText}
          />
        </Box>
        <Box className={classes.drawerHeader}>
          <Typography className={classes.drawerTitleSwitch}>
            3D Effect
          </Typography>
          <Switch
            checked={values.effect3D}
            onChange={handleChange}
            name="effect3D"
            color="primary"
          />
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="row"
          className={classes.botton}
        >
          <Button
            onClick={() => dispatchValues()}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
        </Box>
      </Drawer>
      <Box className={classes.alertPosition}>
        {alert && (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            variant="outlined"
            severity="info"
          >
            The app doesn’t use database connections. When refreshing the page,
            the image will not be saved. If you want to change it permanently,
            change it in the original code files.
          </Alert>
        )}
      </Box>
      <Box
        onMouseMove={(move) => values.effect3D && cMouseMove(move)}
        onMouseEnter={() => values.effect3D && cMouseEnter()}
        onMouseLeave={() => values.effect3D && cMouseLeave()}
        ref={container}
        className={classes.container}
      >
        <Box ref={card} className={classes.card}>
          <Box ref={sneaker} className={classes.sneaker}>
            <Box className={classes.circle} />
            {!images.length ? (
              <img className={classes.img} src={img} alt="Link-BotW" />
            ) : (
              images
            )}
          </Box>
          <Box>
            <Typography className={classes.infoH1} variant="h1" ref={title}>
              {values.title}
            </Typography>
            <Typography
              className={classes.infoH3}
              variant="h3"
              ref={description}
            >
              {values.info}
            </Typography>
            <Box ref={purchase} className={classes.purchase}>
              <Button
                className={classes.pButton}
                variant="contained"
                color="primary"
              >
                {values.buttonText}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Card;
