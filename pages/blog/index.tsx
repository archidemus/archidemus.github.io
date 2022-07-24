import Blog from 'components/blog'
import sizeOf from 'image-size'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const postsFolder = fs.readdirSync('public/posts')

  const posts = postsFolder.map((post) => {
    const slug = post.replace('.md', '')
    const readFile = fs.readFileSync(`public/posts/${post}`, 'utf-8')
    const { data } = matter(readFile)
    const mainImageDimensions = sizeOf(`public/${data.mainImage}`)
    const mainImage = {
      path: data.mainImage,
      ...mainImageDimensions,
    }
    const frontmatter = {
      ...data,
      mainImage,
    }
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blog
