import React from 'react'
import Button from '@material-ui/core/Button'

export default { title: 'Material-UI/Button' }

export const Default = () => 
<Button variant="contained" color="default">
  Hello World
</Button>

export const Primary = () => 
<Button variant="contained" color="primary">
  Hello World
</Button>

export const Secondary = () => 
<Button variant="contained" color="secondary">
  Hello World
</Button>

export const Disabled = () => 
<Button variant="contained" color="disabled">
  Hello World
</Button>


export const Link = () => 
<Button variant="contained" color="primary" href="http://www.google.co.uk">
  Hello World
</Button>
