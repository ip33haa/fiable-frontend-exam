import { useState } from 'react'
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import { ObjectGrid } from './components/ObjectGrid'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
    },
    background: {
      default: '#f8fafc',
    },
  },
  shape: {
    borderRadius: 12,
  },
})

function App() {
  const [placement, setPlacement] = useState('1,1 NORTH')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" sx={{ minHeight: '100vh', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 } }}>
            <Stack spacing={4}>
              <Box>
                <Typography component="h1" gutterBottom variant="h3">
                  Object Placement Grid
                </Typography>
                <Typography color="text.secondary" variant="body1">
                  Enter coordinates and a direction to place the marker on a 5x5
                  grid. The south-west corner is 0,0.
                </Typography>
              </Box>

              <TextField
                fullWidth
                helperText="Format: x,y DIRECTION. Example: 1,1 NORTH"
                label="Placement"
                onChange={(event) => setPlacement(event.target.value)}
                placeholder="1,1 NORTH"
                value={placement}
              />

              <ObjectGrid placement={placement} />
            </Stack>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
