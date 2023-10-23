import {Typography , Box, InputBase, Button} from '@mui/material';
import Link from "next/link";
//import {useForm} from 'react-hook-form';
export default function CreatePerson () {
    // const {handleSubmit} = useForm();
    // const onSubmit = () => {
    // }
    return(
        <form>
            <Box sx={{display: "flex"}}>
            <Typography>Id</Typography> 
            <InputBase variant="outlined" sx={{border: "1px solid grey", marginLeft: "3px"}}/>
            </Box>
            <Box sx={{display: "flex"}}>
            <Typography>Name</Typography> 
            <InputBase variant="outlined" sx={{border: "1px solid grey", marginLeft: "3px"}}/>
            </Box>
            <Button variant="outlined" component={Link} href="/api/add-person?id=2&name=Paul">Create</Button>
        </form>
    )
}