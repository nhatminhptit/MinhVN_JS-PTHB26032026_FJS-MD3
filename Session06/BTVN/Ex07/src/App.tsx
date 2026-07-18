import "./App.css";
import PostItem from "./components/PostItem";
import { useGetPostsQuery } from "./stores/apis/post.api";

function App() {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) return <h2>Đang lấy dữ liệu từ Server về</h2>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Bảng tin</h2>

      {data?.posts?.map((thongTinBaiViet: any) => (
        <PostItem key={thongTinBaiViet.id} post={thongTinBaiViet} />
      ))}
    </div>
  );
}

export default App;
