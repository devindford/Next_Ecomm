import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div>
    <h2>Page Component</h2>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
