import { MyBook, Offer } from '../application/actions/book.actions'

export const calculTotalPrice = (books: [MyBook]) =>
  books.reduce(function (total, currentValue) {
    return total + currentValue.count * currentValue.price
  }, 0)

export const calculBestPricesAfterReduction = (
  books: [MyBook],
  offers: [Offer],
) => {
  const totalPrice = calculTotalPrice(books)
  const offresPrice = offers.map((offer) => {
    if (offer.type === 'percentage') {
      return totalPrice - (totalPrice * offer.value) / 100
    } else if (offer.type === 'minus') {
      return totalPrice - offer.value
    } else {
      let sliceValue = 1
      if (typeof offer.sliceValue !== 'undefined') sliceValue = offer.sliceValue
      return totalPrice - (totalPrice / sliceValue) * offer.value
    }
  })
  return Math.min(...offresPrice)
}
