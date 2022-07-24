import { Photo } from 'components/photos/types'

export interface FrontMatter {
  date?: string
  metaDesc?: string
  metaTitle?: string
  mainImage: Photo
  tags?: Array<string>
  title: string
}

export interface Post {
  slug: string,
  frontmatter: FrontMatter
}

export interface Posts {
  posts: Array<Post>
}
