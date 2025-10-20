import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayouts = () => {

  const { state } = useNavigation();

    return (
      <div>
        <Header></Header>
        {import.meta.env.VITE_name}
        <section className="w-11/12 mx-auto mt-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto mt-3">
          <Navbar></Navbar>
        </nav>
        <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
          <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
          </aside>
          <section className="main col-span-6">
            {state == "loading" ? <Loading /> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayouts;