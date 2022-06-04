import fs from 'fs'
import matter from 'gray-matter'
import Post from 'components/photos/[postId]'

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      postId: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

interface StaticProps {
  params: {
    postId: string
  }
}

export const getStaticProps = async ({ params: { postId } }: StaticProps) => {
  const fileName = fs.readFileSync(`posts/${postId}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default Post
