import cors from '@elysiajs/cors'
import { Elysia } from 'elysia'

const ESSAY = {
  id: '123',
  slug: 'why-medieval-philosophers-cared-if-animals-made-mistakes',
  title: 'The problem of erring animals',
  standfirstLong: 'Three medieval thinkers struggled to explain how animals could make mistakes – and uncovered the nature of nonhuman minds',
  standfirstShort: 'Why medieval philosophers cared if animals made mistakes',
  body: '<p>You are standing on a boat that is drifting down a placid river. You watch the trees on the shore glide along. For a moment, it looks like the trees themselves are moving – not your boat.</p>'
}

const app = new Elysia()
  .use(cors())
  .get('/essays', () => [ESSAY, ESSAY, ESSAY])
  .get('/essay/:slug', ({ params: { slug }, error }) => {
    if (ESSAY.slug !== slug) return error(404)
    return ESSAY
  })
  .get('/cta', () => ({
    id: 'footer-subscribe',
    heading: 'Subscribe to Aeon',
    buttonText: 'Join',
  }))
  .listen(3000)

console.log(`Server running at http://${app.server?.hostname}:${app.server?.port}`)

// Expose API types to the frontend
export type App = typeof app
