import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { List, Typography, Avatar, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

const retrievePosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
    // "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  return response.data;
};

type QueryPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const columns: ColumnsType<QueryPost> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "User Id",
    dataIndex: "userId",
    key: "userId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Body",
    key: "body",
    dataIndex: "body",
  },
];

const Posts = () => {
  const results = useQuery<QueryPost[]>("postsData123", retrievePosts);

  const refetchPosts = () => {
    results.refetch();
  };

  if (results.isLoading) return <div>Fetching posts...</div>;
  if (results.isError) return <div>An error has occurred: </div>;

  return (
    // <List
    //   bordered
    //   itemLayout="horizontal"
    //   style={{textAlign: "left"}}
    //   dataSource={results.data}
    //   renderItem={(post: QueryPost, index: number) => (
    //     <List.Item>
    //         {/* {post.title} {post.body} */}
    //       <List.Item.Meta title={post.title} description={post.body} />
    //     </List.Item>
    //   )}
    // ></List>
    <div style={{ margin: "10px" }}>
      <div style={{ float: "right", marginRight: "100px" }}>
        <Button type="primary" onClick={refetchPosts}>Refresh</Button>
      </div>

      <Table columns={columns} dataSource={results.data} />
    </div>
  );
};

export default Posts;
