import React, { Component } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'
import Layout from '../components/Layout/Layout'

function Menu() {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          MenuList.map(menu => (
            <Card sx={{ maxWidth: '390px', m: 2 }}>
              <CardActionArea>
                <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.Image} alt={menu.Name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.Name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.Description}
                  </Typography>
                  <Typography>
                    {menu.Price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu
