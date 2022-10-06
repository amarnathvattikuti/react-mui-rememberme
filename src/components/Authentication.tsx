import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { store } from "../App";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

export default function Authentication(props) {

  const [token, setToken, remember, setRemember] = useContext(store);
  console.log("Remember me selected: " + remember)
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const { show, setShow } = props;
  const navigate = useNavigate();

  const ChangeHandler = (e) => {
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value })

  }

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://test-api-mui.herokuapp.com/login', values)
      .then(
        res => {
          setToken(res.data.token)
         // console.log('yes false')
              
        })
  }
  const rememberHandler = (event) => {
    const RemMevalue = event.target.value;
     setRemember((preRem) => !preRem)
     console.log(remember, RemMevalue);
   }

  useEffect(() => {
    if (token && remember === false) {
      setToken(token)
      return navigate('/Dashboard')
      
    } 
    if(token && remember === true){
      localStorage.setItem('token', JSON.stringify(token))
      setToken(JSON.parse(localStorage.getItem('token')))
      return navigate('/Dashboard')
    }
    

  }, [token, setToken, navigate])

  
  return (
    <Box
      component="form"
      sx={{ margin: "100px auto", width: 450, border: "1px solid #efefef", padding: "50px" }}
      noValidate
      autoComplete="on"
    >
      <Grid container>
        <Grid item xs={12}>
          <Item sx={{ textAlign: "left", padding: "0px 20px" }}><h2>Sign In</h2></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TextField sx={{ width: "100%" }}
              id="outlined-required"
              label="email"
              type="email"
              name="email"
              value={values.email || ""}
              onChange={ChangeHandler}
            /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TextField sx={{ width: "100%" }}
              id="outlined-required"
              label="password"
              type="password"
              name="password"
              value={values.password || ""}
              onChange={ChangeHandler}
            />
          </Item>
        </Grid>
        <FormControlLabel sx={{ marginLeft: "10px" }} control={<Checkbox />} label="Remember Me" 
        id="rememberMe" value={remember}
        onChange={rememberHandler} 
        />

        <Grid item xs={12}>
          <Item>
            <Stack direction="row">
              <Button sx={{ padding: "15px 30px", marginLeft: "15px" }} variant="contained"
                onClick={submitHandler}
              >Sign In</Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>

  );
}
