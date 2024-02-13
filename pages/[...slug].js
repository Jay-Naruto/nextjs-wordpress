import { gql } from "@apollo/client";
import client from "client";
import BlockRenderer from "components/BlockRenderer/BlockRenderer";
import Page from "components/Page/Page";
import React from 'react'
import { cleanAndTransform } from "utils/cleanAndTransform";
import getProps from "utils/getProps";

export default Page;

export const getStaticProps = getProps
export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
        properties {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.properties.nodes]
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking",
  };
};