import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";

const Home = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
