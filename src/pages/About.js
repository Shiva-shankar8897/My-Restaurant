import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
      <Box sx={{
        my: 15, textAlign: 'center', p: 2,
        '& h4': { fontWeight: 'bold', my: 2, fontSize: '2rem' },
        '& p': { textAlign: 'justify' },
        '@media (max-width:600px)': {
          mt: 0,
          '@ h4': {
            fontSize: '1.5rem'
          }
        }

      }}>
        <Typography variant='h4'>Welcome To My Restaurant </Typography>
        <p>A restaurant is a business that prepares and serves food and drinks to customers.
          Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
          Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models
          ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments. </p>
        <br />
        <p>A restaurant's proprietor is called a restaurateur, this derives from the French verb restaurer, meaning "to restore".
          Professional cooks are called chefs, with there being various finer distinctions (e.g. sous-chef, chef de partie).
          Most restaurants (other than fast food restaurants and cafeterias) will have various waiting staff to serve food,
          beverages and alcoholic drinks, including busboys who remove used dishes and cutlery.
          In finer restaurants, this may include a host or hostess, a maître d'hôtel to welcome customers and seat them,
          and a sommelier or wine waiter to help patrons select wines</p>
      </Box>
    </Layout>
  )
}

export default About
