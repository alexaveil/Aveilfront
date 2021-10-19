/* import internal modules */
import { AppHeader, AppFooter } from "..";

const MainLayout = ({ children }) => (
  <>
    <AppHeader />
    {children}
    <AppFooter />
  </>
);

export default MainLayout;
