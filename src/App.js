import { useState } from "react"
import { Button } from "./components/Button"
import { ButtonsContanier } from "./components/ButtonsContanier"
import { Input } from "./components/Input"
import { Typography } from "./components/Typography"
import { Heading } from "./components/Heading"
import { Tooltip } from "./components/Tooltip"
function App() {
  
  return(
    <div>
      <ButtonsContanier content = "center" direction = "column">
        <Button onClick={() => {
          alert('123');
        }} size={"lg"} variant ="primary" >lg,primary</Button> 
        <Button  type = "submit" size = "md" variant ="primary" >lg,primary</Button> 
        <Button  size = "sm" variant = "primary">sm,primary</Button>
        <Button size = "lg" variant ="bordered" >lg,bordered</Button> 
        <Button size = "md" variant ="bordered" >lg,bordered</Button> 
        <Button size = "sm" variant = "bordered">sm,bordered</Button>  
      </ButtonsContanier>
        <Input value = "Sarmat" placeholder = "Write your name:" label = "Name"></Input>
        <Input value = "Sarmat" label = "Name" danger = "True"></Input>
        <Typography textSize = "sm"> SM. Our mission is to redefine the model of learning and re-engineer
its process by providing innovative administrative and instructional
technologies. Click here for our beliefs. If you are a school
administrator and would like to use ecourse.org for your classes,
please create school profiles. Instructors and students may signup
independent user account. For questions, contact us. </Typography>
        <Typography textSize = "md">
        MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography textSize = "lg">
        LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Heading level = "h1">1 Heading</Heading>
        <Heading level = "h2">2 Heading</Heading>
        <Heading level = "h3">3 Heading</Heading>
        <Heading level = "h4">4 Heading</Heading>
        <Heading level = "h5">5 Heading</Heading>
        <Heading level = "h6">6 Heading</Heading>
        <Tooltip tooltipText = "Click" position="top">Top</Tooltip>
        <Tooltip position="left">Left</Tooltip>
        <Tooltip position="right">Right</Tooltip>
        <Tooltip position="bottom">Bottom</Tooltip>
    </div>
  )
}

export default App;
