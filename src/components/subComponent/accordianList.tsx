import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from "react-router-dom";

const AccordianList = () => {

    const navigate = useNavigate();
    const customerList = [
        {
            text: 'List',
            onClick: () => navigate('/list')
        },
        {
            text: 'Details',
            onClick: () => navigate('/')
        },
        {
            text: 'Edit',
            onClick: () => navigate('/')
        }
    ]

    const productList = [
        {
            text: 'List',
            onClick: () => navigate('/')
        },
        {
            text: 'Create',
            onClick: () => navigate('/')
        }
    ]

    const orderList = [
        {
            text: 'List',
            onClick: () => navigate('/')
        },
        {
            text: 'Details',
            onClick: () => navigate('/')
        }
    ]
    const invoiceList = [
        {
            text: 'List',
            onClick: () => navigate('/')
        },
        {
            text: 'Details',
            onClick: () => navigate('/')
        }
    ]

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <PeopleIcon className="accord-text-space"/>
                    <Typography>

                        Customers
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {customerList.map((item, index) => {
                        const { text, onClick } = item;
                        return (<ListItem key={text} disablePadding onClick={onClick}>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>

                        )
                    }
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ShoppingBagIcon className="accord-text-space"/>
                    <Typography>
                        Products
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {productList.map((item, index) => {
                        const {text, onClick} = item;
                    return (
                        <ListItem key={text} disablePadding onClick={onClick}>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ShoppingCartIcon className="accord-text-space"/>
                    <Typography>
                        Orders
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {orderList.map((item, index) => {
                     const {text, onClick} = item;
                    return (
                        <ListItem key={text} disablePadding onClick={onClick}>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )})}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ReceiptIcon className="accord-text-space"/>
                    <Typography>
                        Invoices
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {invoiceList.map((item, index) => {
                        const {text, onClick} = item;
                        return(
                        <ListItem key={text} disablePadding onClick={onClick}>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )})}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordianList;