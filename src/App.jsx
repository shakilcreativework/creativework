
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './shared/Navbar/Navbar'
import Footer from './shared/Footer/Footer'
import { use } from 'react';

const postsPromise = fetch('/posts.json').then(res => res.json());

// {
//     "id": "1",
//     "slug": "minimal-geometric-shapes",
//     "title": "Minimal Geometric Shapes Collection",
//     "description": "A beautifully curated set of minimal geometric shapes in warm terracotta and beige tones. Perfect for social media posts, website headers, and print designs.",
//     "category": "Abstract",
//     "image": "sample1",
//     "imageHeight": 1200,
//     "adobeUrl": "https://stock.adobe.com",
//     "shutterstockUrl": "https://www.shutterstock.com",
//     "tags": [
//         "geometric",
//         "minimal",
//         "abstract",
//         "shapes"
//     ]
// }

function App() {
  const posts = use(postsPromise);
  console.log(posts);

  return (
    <div>
      <div className='max-w-350 mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6'>
        {
        posts.map((post, idx) => <img key={idx} src={post?.image} alt="" />)
      }
      </div>
      
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
