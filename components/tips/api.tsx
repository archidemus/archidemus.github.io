import axios from 'axios'
import { GistDetails, GistList } from './types'

const GIST_ENDPOINTS = {
  listGists: 'users/archidemus/gists',
  gist: 'gists/GIST_ID.js',
}

const gitAxios = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIST_TOKEN}`,
    Accept: 'application/vnd.github+json',
  },
})
const getGistsList = (): Promise<GistList> => {
  console.log('🚀 ~ file: api.tsx ~ line 20 ~ getGistsList ~ GIST_ENDPOINTS.listGists', GIST_ENDPOINTS.listGists)

  return gitAxios
    .get(GIST_ENDPOINTS.listGists)
    .then((response) => response.data)
}

const getGist = ({ queryKey }: { queryKey: Array<any> }): Promise<GistDetails> => {
  const [, gist] = queryKey
  return gitAxios
    .get(GIST_ENDPOINTS.gist.replace('GIST_ID', gist.id))
    .then((response) => response.data)
}

export default { axios: gitAxios, getGistsList, getGist }
