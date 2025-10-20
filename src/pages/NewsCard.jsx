import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details } = news;

  // Date formatting
  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      {/* Author info */}
      <div className="flex items-center p-4 gap-3 bg-base-200">
        <img
          src={author.img}
          alt={author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-gray-500">{publishedDate}</p>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 py-2">
        <img src={thumbnail_url} alt={title} className="rounded-lg" />
      </figure>

      {/* Details snippet */}
      <div className="px-4 pb-2">
        <p className="text-gray-600 line-clamp-3">{details}</p>
        <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold">
          Read More
        </Link>
      </div>

      {/* Footer: Rating and Views */}
      <div className="flex justify-between items-center px-4 py-2 border-t">
        <div className="flex items-center gap-1">
          {[...Array(rating.number)].map((_, idx) => (
            <FaStar key={idx} className="text-yellow-400" />
          ))}
          <span className="ml-2 text-gray-500">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
