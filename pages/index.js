import PageHead from "../src/components/Helpers/PageHead";
import Home from "./../src/components/Home/index";
export default function HomePage({ data }) {
  const { seoSetting } = data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <Home homepageData={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Return mock data for build
  const data = {
    seoSetting: {
      seo_title: "ShopUs - Multivendor Fashion Ecommerce",
      seo_description: "Fashion ecommerce platform"
    }
  };
  return { props: { data } };
}
