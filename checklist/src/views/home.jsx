import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    ChevronDownIcon
  } from "@chakra-ui/react"

function Home() {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{ fontSize:"30px"}}>Basic Menu: </div>
            <Button link rel="style sheet" href="/notetaker"> NoteTaker </Button>
        </div>
    )
  }
  
  export default Home;