import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
        <Box sx={{
          my: 3, '& svg': { fontSize: '60px', cursor: 'pointer', mr: 2 },
          '& svg:hover': { color: 'goldenrod', transform: 'translatex(10px)', transition: 'all 500ms' },
        }}>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <GitHubIcon />
        </Box>
        <Typography variant='h5' sx={{ '@media(max-width:600px)': { fontSize: '1rem' } }}>
          All Rights Reserved &#169; Shanku
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
