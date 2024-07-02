import { api } from '@/api'
import { notFound } from 'next/navigation'

const EssayPage = async ({ params }: { params: { slug: string } }) => {
  const { data: essay, status } = await api.essay({ slug: params.slug }).get()

  if (status === 404 || !essay) notFound()

  return <main>
    <h1>{essay.title}</h1>
    <p>{essay.standfirstLong}</p>

    <hr />

    <div dangerouslySetInnerHTML={{ __html: essay.body }} />
  </main>
}

export default EssayPage
