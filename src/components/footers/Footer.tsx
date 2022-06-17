import { Box, Container, Typography } from '@mui/material';

import Copyright from './Copyright';

interface FooterProps {
  description: string;
  title: string;
}

const Footer = ({ description, title }: FooterProps) => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
