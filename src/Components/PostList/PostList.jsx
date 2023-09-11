const PostList = ({}) => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input />
      </div>
      <div>
        <label>Post</label>
        <textarea name="message"></textarea>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default PostList;
