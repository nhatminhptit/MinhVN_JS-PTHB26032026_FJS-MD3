import { useLikePostMutation } from "../stores/apis/post.api";

const PostItem = ({ post }: { post: any }) => {
  const [likePost] = useLikePostMutation();

  const handleLike = () => {
    likePost({
      postId: post.id,
      currentLikeStatus: post.isLiked,
    });
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h4>{post.title}</h4>

      <button
        onClick={handleLike}
        style={{
          backgroundColor: post.isLiked ? "blue" : "gray",
          padding: "8px 16px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {post.isLiked ? "Đã Thích" : "Thích"}
      </button>
    </div>
  );
};

export default PostItem;
