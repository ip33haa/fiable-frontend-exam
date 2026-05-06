export const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const

export type Direction = (typeof directions)[number]

export type Placement = {
  x: number
  y: number
  direction: Direction
}

export function parsePlacement(input: string): Placement {
  const normalizedInput = input.trim().replace(/\s+/g, ' ')
  const match = normalizedInput.match(/^(\d+),(\d+) (NORTH|EAST|SOUTH|WEST)$/i)

  if (!match) {
    throw new Error('Use the format "x,y DIRECTION", for example "1,1 NORTH".')
  }

  const x = Number(match[1])
  const y = Number(match[2])
  const direction = match[3].toUpperCase() as Direction

  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || x > 4 || y < 0 || y > 4) {
    throw new Error('Coordinates must be integers from 0 to 4.')
  }

  return { x, y, direction }
}
