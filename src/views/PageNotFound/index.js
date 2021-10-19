import { Container } from "@material-ui/core";
/* import internal modules */
import { MainLayout } from "../../components";

const NotFound = () => {
  return (
    <MainLayout>
      <Container component="section">
        <h2>Not found 404</h2>
      </Container>
    </MainLayout>
  );
};

export default NotFound;
