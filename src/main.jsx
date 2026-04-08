import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import PostsProvider from './context/posts/PostsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PostsProvider>
  </StrictMode>,
)
