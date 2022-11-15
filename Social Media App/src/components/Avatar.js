import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfilePic from './Content/profile-photo.jpg'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={ProfilePic} />
    
      
    </Stack>
  );
}


