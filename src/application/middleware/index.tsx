import books from './app/books.middleware'
import ui from './app/ui.middleware'
import api from './core/api.middleware'

export default [...api, ...ui, ...books]
