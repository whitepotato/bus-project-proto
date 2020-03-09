import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  TextField,
  FormControlLabel,
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Button
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TitlePotato from "../checkout/title_potato_s.png";
import foo from "./m.jpg";
import { Link } from "react-router-dom";

enum WayType {
  ONE_WAY,
  ROUND_TRIP
}

const products = [
  { name: "Depature", desc: "Tokyo", time: "12:00 " },
  { name: "Arrive", desc: "Takasaki", time: "14:00" },
  { name: "Shipping", desc: "", time: "Free" }
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  backGround: {
    backgroundImage: `url(${"./m.jpg"})`,
    backgroundSize: "cover",
    height: 900
  },
  transparent: {
    background: "transparent"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    background: `rgba(255, 255, 255, 0.7)`,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  radios: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    textAlign: "center", 
    marginTop: theme.spacing(3)
  },
  titleBarPotato: {
    marginLeft: theme.spacing(0),
    height: theme.spacing(4),
    width: theme.spacing(4)
  },
  warningText: {
    display        : 'inline-block',
    color          : '#ffffff',            /* 文字の色 */
    fontSize      : '12pt',               /* 文字のサイズ */
    letterSpacing : '2px',               /* 文字間 */
    textShadow    : 
         '1px  1px 0px #000000',
  }
}));

export default function Order() {
  const top100Films = [
    { title: "新宿バスタ ,新宿区,東京", year: 1994 },
    { title: "東京駅 ,中央区,東京", year: 1974 },
    { title: "高崎駅 ,高崎市,群馬", year: 1972 },
    { title: "Shinjuku St,Shinjuku-ward,Tokyo ", year: 1974 },
    { title: "Tokyo St, Chuou-ward,Tokyo", year: 2008 },
    { title: "Takasaki St , Takasaki-city,Gunma", year: 1957 }
  ];
  const classes = useStyles();

  /*For date picker */
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2020-03-18T21:11:54")
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  //For WaySelect
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const style = { backgroundImage: `url(${foo})` };
  return (
    <React.Fragment>
      <div className={classes.backGround}>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <img src={TitlePotato} className={classes.titleBarPotato} />
              いもタイムバス
            </Typography>
          </Toolbar>
        </AppBar>

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              ご予約
            </Typography>
            <br />
            <Grid container spacing = {3}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="position"
                name="position"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="oneWay"
                  control={<Radio color="primary" />}
                  label="片道"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="roundTrip"
                  control={<Radio color="primary" />}
                  label="往復"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Autocomplete
                id="depature"
                options={top100Films}
                getOptionLabel={option => option.title}
                style={{ width: 250 }} //大丈夫？
                renderInput={params => (
                  <TextField
                    {...params}
                    label="出発地"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Typography variant="h5" gutterBottom>
                -
              </Typography>
              <Autocomplete
                id="arrival"
                options={top100Films}
                getOptionLabel={option => option.title}
                style={{ width: 250 }} //大丈夫？
                renderInput={params => (
                  <TextField
                    {...params}
                    label="目的地"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />

              <Grid item xs={12} sm={6}>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    value={selectedDate}
                    margin="normal"
                    id="date-picker-dialog"
                    format="yyyy/MM/dd"
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>


              </Grid>

              <Grid item xs={12} className = {classes.button} >
                <Button variant="contained" color="secondary">
                  検索
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <div  className = {classes.warningText}> <h3>検索ボタンは、ダミーです。<br />購入画面サンプルは</h3><Link to="/check" ><h3>Admin</h3></Link><h3>から確認可能です。</h3></div>
        </main>
             </div>
    </React.Fragment>
  );
}
