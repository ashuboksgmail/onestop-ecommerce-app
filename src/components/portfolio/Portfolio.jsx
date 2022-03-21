import React from "react";
import "./portfolio.css";


const data=[
  {
    id:1,
    image:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dashboard',
    github: 'https:/github.com',
    demo:'https:/github.com'

  },
  {
    id:2,
    image:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dashboard',
    github: 'https:/github.com',
    demo:'https:/github.com'
  },
  {
    id:3,
    image:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dashboard',
    github: 'https:/github.com',
    demo:'https:/github.com'

  },
  {
    id:4,
    image:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dashboard',
    github: 'https:/github.com',
    demo:'https:/github.com'

  },
  {
    id:5,
    image:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dashboard',
    github: 'https:/github.com',
    demo:'https:/github.com'

  },
  {
    id:6,
    image:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dashboard',
    github: 'https:/github.com',
    demo:'https:/github.com'

  }
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container">
      {
        data.map(({id,image,title,github,demo}) =>{
          return(
            <article key= {id} className="portfolio__item">
            <div className="portfolio__item_image">
              <img
                src={image}
                alt=""
              />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          )
        })
      }


        
      </div>
    </section>
  );
};

export default Portfolio;