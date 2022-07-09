import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Main = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/blog')
  }, [router])
}

export default Main
