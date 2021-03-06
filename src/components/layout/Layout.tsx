import { Outlet } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'utils/theme';

import { useAppSelector } from 'hooks/useRedux';
import { selectAuth } from 'store/auth/authSlice';

import Footer from 'components/footers/Footer';
import Header from 'components/headers/Header';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Login', url: '/login' },
  { title: 'Editor', url: '/editor' },
  { title: 'Settings', url: '/settings' },
  { title: 'Profile Favorites', url: '/user1/favorites' },
  { title: 'Account', url: '/user1' },
];

const Layout = () => {
  const { user } = useAppSelector(selectAuth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="A Little Dev" sections={sections} user={user} />
        <main>
          <Outlet />
        </main>
      </Container>

      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
};

export default Layout;
