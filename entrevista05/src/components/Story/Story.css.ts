import { style } from '@vanilla-extract/css'

const storyContainer = style({
  width: 'auto',
  height: '3rem',
  fontSize: '14px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

const headerStory = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

const sotryInfo = style({
  display: 'flex',
  gap: '5px'
})

export { headerStory, storyContainer, sotryInfo }
