import React, { useEffect, useState } from 'react';
import groq from 'groq';
import client from '../client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from '../components/Layout';

import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Home = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(groq`
      *[_type == "homepage"]
      `);

      setPageData(data[0]);
    };
    getData();
  }, []);

  if (pageData) {
    const { title, carousel, body } = pageData;
    return (
      <>
        <Layout pageTitle={title || 'Homepage'}>
          <h1>Homepage</h1>

          {carousel && carousel.length > 0 && (
            <Carousel>
              {carousel.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={urlFor(image).url()} />
                  </div>
                );
              })}
            </Carousel>
          )}

          {body && (
            <BlockContent
              blocks={body}
              // imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          )}
        </Layout>
      </>
    );
  } else {
    return null;
  }
};

// export const getStaticProps = async () => {
//   const pageData = await client.fetch(groq`
//       *[_type == "homepage"]
//     `);

//   return {
//     props: {
//       pageData: pageData[0],
//     },
//   };
// };

export default Home;
