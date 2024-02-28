import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(()=>import('./pages/Home'));
const Today = lazy(()=>import('./pages/Today'));
const Dogs = lazy(()=>import('./pages/Dogs'));
const Cats = lazy(()=>import('./pages/Cats'));
const Website = lazy(()=>import('./pages/Website'));
const Gsap = lazy(()=>import('./pages/Gsap'));
const Youtube = lazy(()=>import('./pages/Youtube'));
const Channel = lazy(()=>import('./pages/Channel'));
const Video = lazy(()=>import('./pages/Video'));
const Search = lazy(()=>import('./pages/Search'));
const Not = lazy(()=>import('./pages/Not'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/dogs' element={<Dogs />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/website' element={<Website />} />
          <Route path='/gsap' element={<Gsap />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/channel/:channelId' element={<Channel/>} />
          <Route path='/video/:videoId' element={<Video />} />
          <Route path='/search/:searchId' element={<Search />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
