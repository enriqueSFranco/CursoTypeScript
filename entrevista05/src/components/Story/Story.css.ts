import { style } from "@vanilla-extract/css"

const storyContainer = style({
  width: 'auto',
  fontSize: '14px'
})

const headerStory = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})


const sotryInfo = style({
  display: 'flex'
})

export { headerStory, storyContainer, sotryInfo }