import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedCategories />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
