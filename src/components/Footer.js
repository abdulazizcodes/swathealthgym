import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
     
      <h1><span> <img src={Logo} alt="logo" style={{ width: '60px', height: '41px' }} /></span> Swat Health Gym</h1>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Airport road mumtaz market second floor mingora swat Mingaora, Khyber Pakhtunkhwa, Pakistan-19130
    </Typography>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.948610770068!2d72.35287521508536!3d34.7820689804137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc22ca793f97a9%3A0x968e48b036372381!2sSwat%20Health%20Gym!5e0!3m2!1sen!2s!4v1656610018686!5m2!1sen!2s" width="300" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Stack>
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Website Developed by Abdul Aziz</Typography>
  </Box>
);

export default Footer;
