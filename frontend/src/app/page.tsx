import { api } from '@/api'
import Link from 'next/link'

const Home = async () => {
  const { data: essays } = await api.essays.get()

  return (
    <main>
      {essays?.map((essay, i) => <article key={i}>
        <h2>{essay.title}</h2>
        <p>{essay.standfirstLong}</p>
        <Link href={`/${essay.slug}`}>Visit essay page</Link>
      </article>)}
    </main>
  )
}

export default Home
