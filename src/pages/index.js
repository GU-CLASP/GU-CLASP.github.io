import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
<html>
   <head>
      <title>Redirect to CLASP.gu.se</title>
      <meta http-equiv = "refresh" content = "0; url = https://clasp.gu.se/" />
   </head>
   <body>
      <p>Redirect to <a href="https://clasp.gu.se/">clasp.gu.se</a></p>
   </body>
</html>


  )
}

export default IndexPage
