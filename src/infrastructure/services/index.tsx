import api from './api'
import consoleLogger from './logger/console'
import elasticSearchLogger from './logger/elastic-search'

const env = process.env.NODE_ENV || 'development'

const services = {
  log: env === 'development' ? consoleLogger : elasticSearchLogger,
  api,
}

export default services
