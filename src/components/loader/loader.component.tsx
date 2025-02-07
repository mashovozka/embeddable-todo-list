import { LoaderSpinner, LoaderContainer } from "./loader.styles";

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
