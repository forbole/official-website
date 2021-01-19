import Blog from "@screens/blog";
import { getPosts, getTags } from "@api/posts";
// import { getPostsByTag } from "@api/tags";
import { Post, Tag } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";
function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async ({ query }) => {
  let formattedPosts = [];
  let formattedSidePosts = [];
  let formattedTags = [];
  let meta = {};
  let error = false;
  try {
    const fetchQuery: any = {};
    if (query.page) {
      fetchQuery.page = query.page;
    }

    const [tags, posts, sidePosts] = await Promise.all([
      getTags(),
      getPosts(fetchQuery),
      getPosts({
        limit: 10,
      }),
      // Rachel's to-do:
      // getPostsByTag(formattedTags),
    ]);

    formattedPosts = posts.map((post) => Post.fromJson(post, {}));
    formattedSidePosts = sidePosts.map((post) => Post.fromJson(post, {}));
    formattedTags = removeInternalTags(tags).map((tag) => Tag.fromJson(tag));
    meta = posts?.meta;
  } catch (err) {
    error = true;
    console.log(error, "error");
  }

  return {
    posts: formattedPosts,
    tags: formattedTags,
    sidePosts: formattedSidePosts,
    meta,
    error,
  };
};

export default BlogPage;
