import NavigationIcon from '@mui/icons-material/Navigation'
import {
  Alert,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { parsePlacement, type Direction, type Placement } from './placement'

export type ObjectGridProps = {
  placement: string
}

const directionRotation: Record<Direction, number> = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
}

export function ObjectGrid({ placement }: ObjectGridProps) {
  const theme = useTheme()
  let parsedPlacement: Placement | null = null
  let errorMessage = ''

  try {
    parsedPlacement = parsePlacement(placement)
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'Invalid placement input.'
  }

  return (
    <Box>
      <TableContainer
        aria-label="5 by 5 object placement grid"
        component={Box}
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Table
          aria-label="Object placement grid"
          sx={{
            tableLayout: 'fixed',
            width: '100%',
          }}
        >
          <TableBody>
            {[4, 3, 2, 1, 0].map((rowY) => (
              <TableRow key={rowY}>
                {[0, 1, 2, 3, 4].map((columnX) => {
                  const isObjectCell =
                    parsedPlacement?.x === columnX && parsedPlacement.y === rowY

                  return (
                    <TableCell
                      align="center"
                      key={`${columnX}-${rowY}`}
                      sx={{
                        aspectRatio: '1 / 1',
                        bgcolor: isObjectCell
                          ? alpha(theme.palette.primary.main, 0.08)
                          : 'background.paper',
                        borderColor: 'divider',
                        height: { xs: 56, sm: 88 },
                        p: 1,
                        position: 'relative',
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        sx={{ left: 8, position: 'absolute', top: 6 }}
                        variant="caption"
                      >
                        {columnX},{rowY}
                      </Typography>

                      {isObjectCell && parsedPlacement ? (
                        <Box
                          aria-label={`Object at ${columnX},${rowY} facing ${parsedPlacement.direction}`}
                          role="img"
                          sx={{
                            alignItems: 'center',
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            boxShadow: theme.shadows[4],
                            color: 'primary.contrastText',
                            display: 'inline-flex',
                            height: { xs: 34, sm: 44 },
                            justifyContent: 'center',
                            transform: `rotate(${directionRotation[parsedPlacement.direction]}deg)`,
                            width: { xs: 34, sm: 44 },
                          }}
                        >
                          <NavigationIcon fontSize="small" />
                        </Box>
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        {parsedPlacement ? (
          <Chip
            color="primary"
            label={`Object placed at ${parsedPlacement.x},${parsedPlacement.y} facing ${parsedPlacement.direction}`}
            variant="outlined"
          />
        ) : (
          <Alert severity="error">{errorMessage}</Alert>
        )}
      </Box>
    </Box>
  )
}
