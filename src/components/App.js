import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <BlogHeader name ={blogData.name}/>
       <BlogAbout image ={blogData.image}/>
    </div>
  );
}
function BlogHeader(props){
  return (
  <h1>{props.name}</h1>     
  )
}

function BlogAbout(
  about,
  imgSrc ="https://via.placeholder.com/215Links to an external site."
){
  return(
    <aside>
      <img src={imgSrc} alt="blog logo"/>
    </aside>
  );
}

/**function ArticleList({posts}) {
  const posts = [blogData.posts]

  return (
    <main>
      {articles}
    </main>
  );
}**/

export default App;
