import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CustomerData from './userData';
import Divider from '@mui/material/Divider';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#131313fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function LatestTrans() {

  const data = CustomerData;

  const newData = data.slice(0, 5).map((item, index) => {
    return (
      <table key={index} style={{ width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className='py-5' >
            <td className='w-12 h-16'>
              <span className='bg-silver rounded-xl text-center w-12 p-1 block'>
                {(item.date).slice(0, 6)}</span>

            </td>
            <td className='w-72 pl-4'>
              {item.name} <br /> <span className='text-lightdark opacity-50'>{item.paymentMode}</span>
            </td>
            <td className='w-15'>
              {item.Status === 'Success' ?
                <Chip label="Success" className='bg-success text-white' /> : null}
              {item.Status === 'On hold' ?
                <Chip label="on hold" color="primary" className='bg-info text-white' /> : null}
              {item.Status === 'fail' ? <Chip label="Failed"
                variant="outlined" className='bg-danger text-white' /> : null}
            </td>
            <td>

              {item.Status === "Success" ?
                <span className='text-success'>${item.spent}.00</span> : null
              }
              {item.Status === "On hold" ?
                <span className='text-info'>${item.spent}.00</span> : null
              }
              {item.Status === "fail" ?
                <span className='text-danger'>${item.spent}.00</span> : null
              }
            </td>
          </tr>
        </tbody>
      </table>
    )
  })

  const mailData = data.slice(0, 5).map((element, index) => {
    return (
      <table key={index} className="p-5 w-full border-b border-b-silver">
        <tbody>
          <tr className='h-16'>
            <td>
              <img src={element.image} alt="pic"
                style={{ width: "35px", borderRadius: "50%" }}
              />
            </td>
            <td className="pl-1 w-50">
              <span >{element.name}</span><br />
              <span className="text-lightdark opacity-60">{element.description}</span></td>
            <td className='text-lightdark opacity-50 font-light font-xs text-right'  >{(element.date).slice(0, 10)}</td>
          </tr>
        </tbody>
      </table>

    )
  })


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Item>
            <h2 className='text-xl font-bold py-5'>Latest Transactions</h2>

            <Grid container item xs={12} className="bg-silver py-3 px-4">
              <Grid item xs={8} md={9}>Transaction</Grid>
              <Grid item xs={4} md={3}
                style={{ textAlign: "left" }}
              >Amount</Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Item className='shadow-none overflow-auto'>
                  {newData}
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <h2 className="py-4 text-xl font-bold border-b border-b-silver mb-5">inbox</h2>

            {mailData}
            <Divider />
            <Button size="small" className='normal-case py-7 px-5'>Go to chat</Button>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
