import Head from "next/head";
import { useRouter } from "next/router";

const HeadMeta = ({ title, description }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{router.pathname == "/" ? title : title + " | " + "SAS"}</title>
      <meta name="description" content={description}></meta>
      <meta charset="UTF-8"></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
  );
};

export default HeadMeta;

HeadMeta.defaultProps = {
  title: "SAS - RAAC",
  description:
    "School of Advanced Sciences has its own RAAC team to facilitate the needs of collection and documenting for NAAC and other accreditation agencies.",
};
