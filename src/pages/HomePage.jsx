import Image from '../images/phone-book.png';
import { Banner, Box, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Box>
      <Title>Welcome to Phonebook App</Title>
      <Banner styled={{ backgroundImage: `url(${Image})` }} />
    </Box>
  );
};

export default HomePage;
