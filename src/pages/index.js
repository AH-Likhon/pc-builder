import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

const Home = ({ data }) => {
  return (
    <>
      <Banner />
      <FeaturedCategories />
      <FeaturedProducts data={data?.data} />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  if (typeof window === "undefined") {
    const res = await fetch("http://localhost:3000/api/products");
    // console.log(res);
    const data = await res.json();
    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  }
};
