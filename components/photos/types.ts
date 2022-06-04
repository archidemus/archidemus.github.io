export interface FrontMatter {
  date?: string
  metaDesc?: string
  metaTitle?: string
  mainImage: {
    height: number
    orientation: number
    type: string
    url: string
    width: number
  }
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
