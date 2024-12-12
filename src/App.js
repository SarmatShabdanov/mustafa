import { useState } from "react"
import { Button } from "./components/Button"
import { ButtonsContanier } from "./components/ButtonsContanier"
import { Input } from "./components/Input"
import { Typography } from "./components/Typography"
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
        <Typography> SM. Our mission is to redefine the model of learning and re-engineer
its process by providing innovative administrative and instructional
technologies. Click here for our beliefs. If you are a school
administrator and would like to use ecourse.org for your classes,
please create school profiles. Instructors and students may signup
independent user account. For questions, contact us. </Typography>
    </div>
  )
}

export default App;
