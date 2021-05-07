import { Fragment } from 'react';
import MainHeader from './header/MainHeader';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        {children}
      </main>
    </Fragment>
  )
}

export default Layout;