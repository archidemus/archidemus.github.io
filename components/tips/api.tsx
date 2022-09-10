import axios from 'axios'
import { GistDetails, GistList } from './types'

const GIST_ENDPOINTS = {
  listGists: 'users/archidemus/gists',
  gist: 'gists/GIST_ID.js',
}

const gitAxios = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'Bearer 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',
    Accept: 'application/vnd.github+json',
  },
})
const getGistsList = (): Promise<GistList> => gitAxios
  .get(GIST_ENDPOINTS.listGists)
  .then((response) => response.data)

const getGist = ({ queryKey }: { queryKey: Array<any> }): Promise<GistDetails> => {
  const [, gist] = queryKey
  return gitAxios
    .get(GIST_ENDPOINTS.gist.replace('GIST_ID', gist.id))
    .then((response) => response.data)
}

export default { axios: gitAxios, getGistsList, getGist }
