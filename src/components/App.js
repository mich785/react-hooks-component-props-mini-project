import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <BlogHeader name ={blogData.name}/>
       <BlogAbout image ={blogData.image} about={blogData.about}/>
       <ArticleList articles={blogData.posts} />
    </div>
  );
}
function BlogHeader(props){
  return (
  <h1>{props.name}</h1>     
  )
}

function BlogAbout(
  props,
  imgSrc ="https://via.placeholder.com/215Links to an external site."
){
  return(
    <aside>
      <img src={imgSrc} alt="blog logo"/>
      <p>{props.about}</p>
    </aside>
  );
}

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default App;








