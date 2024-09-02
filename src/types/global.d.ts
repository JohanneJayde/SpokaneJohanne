declare global {
  export interface Post {
    title: string;
    slug: string;
    excerpt: string;
    pubDate: string;
    featuredImage: string;
    tags: string[];
    categories: string[];
    author: string;
    content: string;
  }

  export interface GraphQLResponse {
    posts: {
      nodes: {
        title: string;
        excerpt: string;
        date: string;
        modified: string;
        slug: string;
        featuredImage: {
          node: {
            sourceUrl: string;
          };
        };
        tags: {
          nodes: {
            id: string;
            name: string;
          }[];
        };
        categories: {
          nodes: {
            id: string;
            name: string;
          }[];
        };
        author: {
          node: {
            id: string;
            name: string;
          };
        };
        content: string;
      }[];
    };
  }
}

export {};
