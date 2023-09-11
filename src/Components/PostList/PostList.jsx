import Post from "../Postt/Post";

const PostList = ({}) => {
  //   const postItem = posts.map((post) => <Post postObj={post} />);

  //   return <div>{postItem}</div>;

  //   Creating dummy data
  return (
    <div>
      <div>David Lagrange</div>
      <p>
        I recently wen tinto the woods to search for the oldest tree I could
        find. To my luck I found a very old hemlock around 200-250 years old.
        Let me know if you would like me to show it to you!
      </p>
      <button>Like</button> <button>Dislike</button>
    </div>
  );
};

export default PostList;
