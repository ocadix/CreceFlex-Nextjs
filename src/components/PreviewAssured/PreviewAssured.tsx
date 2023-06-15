import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PreviewAssured() {
  return (
   <Card sx={{ maxWidth: 345 }}>
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       
     </Typography>
     <Typography variant="body2" color="text.secondary">
      <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' }, }}noValidate autoComplete="off">
         <div>
            <TextField id="outlined-read-only-input" label="Tu prima de seguro mensual es de" defaultValue="0" InputProps={{ readOnly: true, }} />
            <TextField id="outlined-read-only-input" label="Tu Asistencia Desempleo cuesta" defaultValue="0" InputProps={{ readOnly: true, }} />
            <TextField id="outlined-read-only-input" label="Tu seguro de vida es de" defaultValue="0" InputProps={{ readOnly: true, }} />
         </div>
      </Box>
     </Typography>
   </CardContent>
 </Card>
  );
}
