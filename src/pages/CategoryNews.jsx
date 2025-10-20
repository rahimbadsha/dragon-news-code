import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
const {id} = useParams(); // it's work without useloader and it's string
const data = useLoaderData();

const [categoryNews, setCategoryNews] = useState([])

// useEffect(( () => {} ), [])
useEffect(() => {
    if(id == "0") {
        setCategoryNews(data);
        return
    } else if(id == "1") {
        const filteredNews = data.filter(news => news.others.is_today_pick == true)
        setCategoryNews(filteredNews)
    } else {
        const filteredNews = data.filter((news) => news.category_id == id);
        setCategoryNews(filteredNews)
        //console.log(filteredNews);
    }
    
}, [data, id])

//console.log(data)
    return (
      <div>
        <h2 className="font-bold mb-5 text-center">
          Total {categoryNews.length}
        </h2>
        <div>
          {/* { categoryNews.map((news) => (
            <NewsCard></NewsCard>
          ))} */}

          {
            categoryNews.map(news => (
                <NewsCard key={news.id} news={news} ></NewsCard>
            ))
          }
        </div>
      </div>
    );
};

export default CategoryNews;