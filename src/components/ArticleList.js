import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  const articleList =posts.map((post)=>{
return <Article
key={post.id}
title={post.title}
date={post.date}
preview={post.preview}
minutes={post.minutes}
/>
  
  })

  return (
    <div>
        <main>
{articleList}
        </main>
    </div>
  )
}


export default ArticleList