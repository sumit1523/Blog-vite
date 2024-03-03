import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/dbConfig";
import { Container, PostCard } from "../components";
import { getPosts } from "../store/postSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        dispatch(getPosts(posts.documents));
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to view the Blog posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
