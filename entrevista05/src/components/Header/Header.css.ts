import { style } from '@vanilla-extract/css'

const navComponent = style({
  height: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px'
})

const headerComponent = style({
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  backgroundColor: '#000',
  paddingInline: '2rem',
  textTransform: 'capitalize'
})

export { navComponent, headerComponent }
