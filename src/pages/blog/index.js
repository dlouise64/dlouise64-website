import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = () => (
  <Layout>
    <h1>
      Latest Stories
    </h1>
    <section>
      <BlogRoll />
    </section>
  </Layout>
)

export default BlogIndexPage