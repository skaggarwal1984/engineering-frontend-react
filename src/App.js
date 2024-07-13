import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/home/Home';
import MyProfile from './components/pages/MyProfile/MyProfile';
import Articles from './components/pages/MyProfile/Articles/Articles';
import ArticleDetail from './components/pages/MyProfile/Articles/ArticleDetail/ArticleDetails';
import ProjectDetail from './components/pages/MyProfile/Projects/ProjectDetail/ProjectDetail';
import BillReader from './components/pages/expenses/BillReader/BillReader';
import Felicity from './components/pages/felicity/Felicity';
import ArticleDetail1 from './components/pages/MyProfile/Articles/ArticleDetail/ArticleDetail1';
import ArticleDetail2 from './components/pages/MyProfile/Articles/ArticleDetail/ArticleDetail2';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/articles/article-1" element={<ArticleDetail />} />
          <Route path="/articles/article-2" element={<ArticleDetail1 />} />
          <Route path="/articles/article-3" element={<ArticleDetail2 />} />
          <Route path="/projects/project-1" element={<ProjectDetail />} />
          <Route path="/billreader" element={<BillReader/>} />
          <Route path="/felicity" element={<Felicity />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
