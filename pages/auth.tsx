import type { NextPage } from "next";
import { Shell } from '../views/Shell'


export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {

  return (
        <Shell />
  );
};

export default Home;
