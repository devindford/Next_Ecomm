import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h2>Page Component</h2>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;