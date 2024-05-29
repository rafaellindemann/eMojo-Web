import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'
import theme from './theme.js'

import router from './router/routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router}>

    </RouterProvider>
  </ThemeProvider>
)