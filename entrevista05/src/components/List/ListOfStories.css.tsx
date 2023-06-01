import { style } from '@vanilla-extract/css'

const listOfStories = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1rem',
  margin: 0,
  padding: 0
})

export { listOfStories }
