import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return(
    <>
      <h1>Welcome to your dashboard!</h1>
      <button onClick={() => router.push('/about')}>About Us</button>
    </>
  )
}