import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import Calender from './Calender'
import './News.css'
import aditi from '../assets/Images/image.png'
import userImg from '../assets/Images/user.jpg'
import techImg from '../assets/Images/tech.jpg'
import sportsImg from '../assets/Images/sports.jpg'
import scienceImg from '../assets/Images/science.jpg'
import worldImg from '../assets/Images/world.jpg'
import healthImg from '../assets/Images/health.jpg'
import nationImg from '../assets/Images/nation.jpg'
import axios from 'axios';


const News = () => {
    const [headline, setHeadline] = useState(null);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=hi&&apikey=d2f89fa6f879e1421a0b265947eb9da5`
            const response = await axios.get(url);
            console.log(response.data.articles);

            const fetchedNews = response.data.articles;
          
            console.log(fetchedNews[0].description);
            setHeadline(fetchedNews[0]);
            setNews(fetchedNews.slice(1,7));
            console.log(news);
        
            // const fetchedNews = response.;
            // setHeadline(fetchedNews[0]);
            // console.log(fetchedNews[0]);

         


        }

        fetchNews();


    }, [])

  return (
    <div className='news'>
        <header className='news-header'>
         <h1 className="logo">News & Blogs</h1>
         <div className="search-bar">
            <form>
                <input type="text" 
                placeholder="Search News..."/>
                <button type="submit">
            <i className="fa-solid fa-magnifying-glass">
              </i>
                </button>
            </form>

         </div>
        </header>
        <div className="news-content">
            <div className="navbar">
                <div className="user">
                    <img src={aditi} alt="User Image"></img>
                    <p>Aditi's Blog</p>

                </div>
                <nav className="categories">
                    <h1 className="nav-heading">Categories</h1>
                    <div className="nav-links">
                        <a href="#" className='nav-link'>General</a>
                        <a href="#" className='nav-link'>World</a>
                        <a href="#" className='nav-link'>Business</a>
                        <a href="#" className='nav-link'>Technology</a>
                        <a href="#" className='nav-link'>Entertainment</a>
                        <a href="#" className='nav-link'>Sports</a>
                        <a href="#" className='nav-link'>Science</a>
                        <a href="#" className='nav-link'>Health</a>
                        <a href="#" className='nav-link'>Nation</a>
                        <a href="#" className='nav-link'>BookMarks <i className="fa-regular fa-bookmark"></i></a>
                    </div>
                </nav>
            </div>
            <div className="news-section">
                {headline && (
                    <div className="headline">
                    <img src={headline.image} alt={headline.title} />
                    <h2 className='headline-title'>
                        {headline.title}
                    <i className="fa-regular fa-bookmark"></i>
                    </h2>
                    </div>
                )}
                
                <div className="news-grid">
                    <div className="news-grid-items">
                    <img src={sportsImg} alt="News Image" />
                    <h3>Lorem ipsum dolor sit.
                    <i className="fa-regular fa-bookmark"></i>
                    </h3>
                    </div>

                    <div className="news-grid-items">
                    <img src={scienceImg} alt="News Image" />
                    <h3>Lorem ipsum dolor sit.
                    <i className="fa-regular fa-bookmark"></i>
                    </h3>
                    </div>

                    <div className="news-grid-items">
                    <img src={worldImg} alt="News Image" />
                    <h3>Lorem ipsum dolor sit.
                    <i className="fa-regular fa-bookmark"></i>
                    </h3>
                    </div>

                    <div className="news-grid-items">
                    <img src={healthImg} alt="News Image" />
                    <h3>Lorem ipsum dolor sit.
                    <i className="fa-regular fa-bookmark"></i>
                    </h3>
                    </div>

                    <div className="news-grid-items">
                    <img src={nationImg} alt="News Image" />
                    <h3>Lorem ipsum dolor sit.
                    <i className="fa-regular fa-bookmark"></i>
                    </h3>
                    </div>

                    <div className="news-grid-items">
                    <img src={techImg} alt="News Image" />
                    <h3>Lorem ipsum dolor sit.
                    <i className="fa-regular fa-bookmark"></i>
                    </h3>
                    </div>
                </div>
            </div>
             <div className="my-blogs">
                My Blogs
             </div>
             <div className="weather-calender">
             <Weather />
             <Calender />
             </div>
            
      


        </div>
        <footer className="news-footer">Footer</footer>
    </div>
  )
}

export default News















