import {Button} from '@mui/material';
import Link from 'next/link';




export default function Home() {
  return (
  <Button 
  variant="contained" 
  color = "primary"
  component = {Link}
  href = "/api/get-people"
  >
    Show People
    </Button>
  )
}
