import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CustomerDataTable from'./customersTable';

const UserTable = () => {
    const [value, setValue] = useState('all');
    const [sort, setSort] = useState('LastUpdateNew');

    
    const [values, setValues] = useState({
        customers: ''
    });

    const handleSort = (event) => {
        event.preventDefault();
        setSort(event.target.value);
       // console.log(sort)
      };

    const Changehandler = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
       // console.log(values);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{flexGrow: 1, width: '100%' }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} className="border-b border-b-silver">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="all" label="All" className="normal-case" />
                        <Tab value="AcceptsMarketing" label="Accepts Marketing" 
                        className="normal-case"/>
                        <Tab value="Prospect" label="Prospect" className="normal-case"/>
                        <Tab value="Returning" label="Returning" className="normal-case"/>
                    </Tabs>
                </Grid>
            </Grid>
            <Box sx={{flexGrow: 1, width: '100%' }}>
                <Grid container spacing={{ xs: 1, md: 2 }} className="py-9">
                    <Grid item xs={12} sm={6} md={9} className="py-3 md:pr-1">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="Search customers">Search customers</InputLabel>
                            <OutlinedInput
                                id="customers"
                                type={values.customers ? 'text' : 'Search customers'}
                                value={values.customers}
                                onChange={Changehandler('customers')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle customers visibility"
                                            edge="end"
                                        >
                                            {values.customers ? <SearchOutlinedIcon /> : <SearchOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Customers"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="py-3 mt-2">
                        <FormControl fullWidth>
                            <InputLabel id="Sort">Sort</InputLabel>
                            <Select
                                labelId="sort"
                                id="sort"
                                value={sort}
                                label="Sort"
                                onChange={handleSort}
                            >
                                <MenuItem value="LastUpdateNew">Last update(newest)</MenuItem>
                                <MenuItem value="LastUpdateOld">Last update(oldest)</MenuItem>
                                <MenuItem value="TotalOrdersHigh">Total Orders(higest)</MenuItem>
                                <MenuItem value="TotalOrdersLow">Total Orders(lowest)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 1, md: 2 }}>
                <Grid item xs={12}>
                    <CustomerDataTable/>
                </Grid>
                </Grid>
            </Box>
        </Box>

    );
}

export default UserTable;