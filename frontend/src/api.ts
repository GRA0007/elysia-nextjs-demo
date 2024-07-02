import { treaty } from '@elysiajs/eden'

// Import types from the API
import type { App } from '../../api/src/index'

export const api = treaty<App>('localhost:3000')
