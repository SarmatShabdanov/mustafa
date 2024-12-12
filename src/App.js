import { Button } from "./components/Button"
function App() {
  return(
    <div>
      <Button size = "lg" variant ="primary" >lg,primary</Button> 
      <Button size = "md" variant ="primary" >lg,primary</Button> 
      <Button  size = "sm" variant = "primary">sm,primary</Button>

      <Button size = "lg" variant ="bordered" >lg,bordered</Button> 
      <Button size = "md" variant ="bordered" >lg,bordered</Button> 
      <Button  size = "sm" variant = "bordered">sm,bordered</Button>  
    </div>
  )
}

export default App;
