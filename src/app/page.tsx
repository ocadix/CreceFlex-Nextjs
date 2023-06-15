'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import PreviewAssured from '@/components/PreviewAssured/PreviewAssured';
import ValueAssistance from '@/components/ValueAssistance/ValueAssistance';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Home() {
  return (
    <React.Fragment> 
      <Grid container>
      <Grid item xs>
        <ValueAssistance />
      </Grid>
      <Divider orientation="vertical" flexItem>
        
      </Divider>
      <Grid item xs>
        <PreviewAssured />
      </Grid>
    </Grid>
    </React.Fragment>
  )
}
