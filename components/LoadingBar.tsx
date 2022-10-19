import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function LoadingBar() {
  return (
    <Box sx={{ width: '100%' }} className="m-auto bottom-0 top-0">
      <LinearProgress />
    </Box>
  )
}
