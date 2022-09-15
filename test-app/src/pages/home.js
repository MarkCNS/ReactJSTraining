import React from "react";
import { useNavigate, useHistory, useLocation } from "react-router-dom";
import useGetPosts from "../api/getPost";
import usePostPosts from "../api/postPost";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToAbout = () => {
    navigate("/about");
  };
  const goToContact = () => {
    navigate("/contact");
  };

  const { loading, data, getPosts } = useGetPosts();
  const { loading: postLoading, data: postData, postPosts } = usePostPosts();
  console.log(data, "dataa");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>This is the Home page</h1>
        <h2>Hello! {location.pathname.replace("/", "home")} page</h2>
        <button onClick={goToAbout}>Go To About Page</button>
        <button onClick={goToContact}>Go To Contact Page</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // textAlign: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "20px" }}>
            <button onClick={getPosts}>Fetch</button>
          </div>
          {loading ? (
            <div>Loading! Please Wait...</div>
          ) : (
            <div>
              {data?.map((item, index) => {
                return (
                  <div key={index}>
                    <div style={{ fontWeight: "bold" }}>
                      Title : {item.title}
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      Body : {item.body}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div style={{ margin: "20px" }}>
            <button
              onClick={() =>
                postPosts({
                  id: 1,
                  title: "Hey this is new title",
                  body: "this is new body",
                })
              }
            >
              {postLoading ? "Loading..." : "Post Data"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
