import { graphql } from "gatsby";
import React from "react";

interface PostProps {
  data: {
      markdownRemark: {
          html: string;
          frontmatter: {
              title: string;
          }
      }
  }
}

export default function Post(props: PostProps) {
  const post = props.data.markdownRemark;

  return <div className="post">
      <h1 className="centered">{post.frontmatter.title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{__html: post.html}} />
  </div>;
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
