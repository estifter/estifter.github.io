import React from "react";
import { graphql } from "gatsby";

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            fields: {
              slug: string;
            }
            frontmatter: {
              date: string;
              title: string;
            };
            excerpt: string;
          };
        }
      ];
    };
  };
}

/**
 * Index page displaying recent posts
 * @param props
 */
export default function Index(props: IndexProps) {
  return (
    <div className="index">
      <p>My name is Ed Stifter and this is my blog.</p>
      <a href="/about">About</a>
      {props.data.allMarkdownRemark.edges
        .sort((a, b) => {
          let x = new Date(a.node.frontmatter.date)
          let y = new Date(b.node.frontmatter.date)
          return y.getTime() - x.getTime(); // sort in descending
        })
        .map((edge) => {
          return (
            <div key={edge.node.id} className="index-post-preview">
              <a href={edge.node.fields.slug}>{edge.node.frontmatter.title}</a>
              <span>{edge.node.frontmatter.date}</span>
              <div>{edge.node.excerpt}</div>
            </div>
          );
        })}
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`;
