type RequestData = { url: string; method: 'GET' | 'POST' }

export interface IRequestRecord {
  [key: string]: RequestData
}
const endpoint: IRequestRecord = {
  getAll: {
    url: 'books',
    method: 'GET',
  },
  getOffer: {
    url: 'books/[ids]/commercialOffers',
    method: 'GET',
  },
}
export default endpoint
