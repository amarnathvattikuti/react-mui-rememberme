import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import data from './cardData.json';
import { Divider } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleIcon from '@mui/icons-material/People';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#131313fa' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
}));

export default function Cards() {
    const newCardData = data.map((el, index) => {
        return (
                <Grid item xs={12} md={6} key={index} className="py-4 md:px-4">
                    <Item className="py-2 px-4">
                        <h4 className="text-primary">
                           {el.cardname === 'Jobs' ? <ShoppingBasketIcon/> : null}
                           {el.cardname === 'Help Center' ? <InfoOutlinedIcon/> : null}
                           {el.cardname === 'Download' ? <FileDownloadIcon/> : null}
                           {el.cardname === 'Contacts' ? <PeopleIcon/> : null}
                            <span className='absolute mt-1 ml-2'>{el.cardname}</span>
                        </h4>
                        <h2 className='text-xl font-semibold pt-4'>{el.title}</h2>
                        <p className='pb-4 opacity-80'>{el.desc}</p>
                        <Divider 
                         style={{margin: "15px 0px"}}
                        />
                        {el.cardname === 'Jobs' ? 
                         <Button startIcon={<ArrowForwardIcon />}
                         style={{ textTransform: "none" }}
                       >
                         Search Jobs
                       </Button> : null 
                       }
                       {
                        el.cardname === 'Help Center' ? 
                        <Button startIcon={<OpenInNewIcon />}
                         style={{ textTransform: "none" }}
                       >
                         Help Center
                       </Button> : null 
                       }
                       {
                        el.cardname === 'Download' ?
                        <Button startIcon={<FileDownloadIcon />}
                        style={{ textTransform: "none" }}
                      >
                       Download Free PDF
                      </Button> : null
                       }
                       {
                        el.cardname === 'Contacts' ? 
                        <Button startIcon={<ArrowForwardIcon />}
                        style={{ textTransform: "none" }}
                      >
                       My Contacts
                      </Button> : null
                       }
                    </Item>
                </Grid>
        )
    })


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid item container spacing={3}>
                {newCardData}
            </Grid>
        </Box>
    );
}
