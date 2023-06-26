import React, { useEffect, useState } from "react";
import './css/style.css';
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Authorization from "./pages/Authorization";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Navigate, Route, Routes } from 'react-router-dom'
import RequireAuth from "./hoc/RequiredAuth";
import { useAuth } from "./hook/useAuth";
import Post from "./components/posts/Post";
import PostList from "./components/posts/PostList";
import Activation from "./components/Activation";
import Profile from "./components/Profile";
import NewPost from "./components/posts/NewPost";

function App() {
  
  const [indexRender, setIndexRender] = useState(<Authorization />);
  const { user } = useAuth();


  useEffect(() => {
    if (user) {
      setIndexRender(<RequireAuth>
        <Home />
      </RequireAuth>)
    } else {
      setIndexRender(<Authorization />)
    }

  }, [user])
  const register = !user ? <Registration /> : <Navigate to="Bloc" replace />

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index="/*" element={indexRender} >
          <Route index element={<Profile />} />
          <Route path="posts" element={<PostList />} />
          <Route path="new-post" element={<NewPost />} />
          <Route path="posts/post/:id" element={<Post />} />
        </Route>
        <Route path="activ" element={<Activation />} />
        <Route path="regist" element={register} />
        <Route path="login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
};

export default App;
