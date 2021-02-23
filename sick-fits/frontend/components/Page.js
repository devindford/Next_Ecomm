import PropTypes from 'prop-types';
import Header from './Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { InnerStyles } from './styles/InnerStyles';

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
