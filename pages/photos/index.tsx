import Photos from 'components/photos'
import sizeOf from 'image-size'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const files = fs.readdirSync('posts')

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data } = matter(readFile)
    const mainImageDimensions = sizeOf(`public/${data.mainImage}`)
    const mainImage = {
      url: data.mainImage,
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

export default Photos
