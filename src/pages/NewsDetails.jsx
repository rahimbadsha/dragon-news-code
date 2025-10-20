import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const newsData = useLoaderData()
    const {id} = useParams()

    const [news, setNews] = useState({});
    //console.log(id, newsData, news)

    useEffect(() => {
        const newsDetails = newsData.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    }, [newsData, id])

    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12">
          <section className="col-span-9">
            <h2 className="font-bold">News Details</h2>
            <NewsDetailsCard news={news} ></NewsDetailsCard>
          </section>
          <aside className="col-span-3">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;