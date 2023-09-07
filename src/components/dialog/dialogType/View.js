import Typography from '@mui/material/Typography';
import { ColorTag } from '../../color_Tag';
import React from 'react'
import Box from '@mui/material/Box';

export const ViewDialog = ({content, color, status}) => {
    return(
        <Typography gutterBottom sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between'}}>
            <Box sx={{display: "flex"}}>
                Content:
                <Typography fontWeight={'bold'} paddingLeft={'7px'}>
                    {content}
                </Typography>
            </Box>
            <ColorTag color={color}/>
            {
                status?
                (<Box sx={{display: "flex"}}>
                    Status:
                    <Typography color={'green'} paddingLeft={'7px'}>
                        Completed
                    </Typography>
                </Box>) : 
                
                (<Box sx={{display: "flex"}}>
                    Status:
                    <Typography color={'gray'} paddingLeft={'7px'}>
                        Incomplete
                    </Typography>
                </Box>)
            }
        </Typography>
    );
}