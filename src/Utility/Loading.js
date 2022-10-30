import * as React from 'react';
import Box from '@mui/material/Box';

import CircularProgress from '@mui/material/CircularProgress';

export default function Loading({color}) {

    
  return (
    <Box sx={{ display: 'flex' }}>
    <CircularProgress  sx = {{color}} />
  </Box>
  )
}