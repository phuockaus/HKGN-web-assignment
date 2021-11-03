/* eslint-disable max-len */
export default function filtering(filter, productList) {
  let list = productList
  if (filter.search_name !== '') list = list.filter((prod) => prod.name.toLowerCase().includes(filter.search_name.toLowerCase()))
  if (filter.cate_1 || filter.cate_2 || filter.cate_3 || filter.cate_4) {
    if (!filter.cate_1) list = list.filter((prod) => prod.category !== 'caphebot')
    if (!filter.cate_2) list = list.filter((prod) => prod.category !== 'caphehoatan')
    if (!filter.cate_3) list = list.filter((prod) => prod.category !== 'dungcucaphe')
    if (!filter.cate_4) list = list.filter((prod) => prod.category !== 'mayphacaphe')
  }
  switch (filter.cost) {
    case 'less':
      list = list.filter((prod) => parseInt(prod.cost, 10) < 100000)
      break
    case 'equal1':
      list = list.filter((prod) => parseInt(prod.cost, 10) >= 100000 && parseInt(prod.cost, 10) < 500000)
      break
    case 'equal2':
      list = list.filter((prod) => parseInt(prod.cost, 10) >= 500000 && parseInt(prod.cost, 10) < 1000000)
      break
    case 'more':
      list = list.filter((prod) => parseInt(prod.cost, 10) > 1000000)
      break
    default:
      break
  }
  switch (filter.rate) {
    case '1':
      list = list.filter((prod) => parseFloat(prod.review_point) < 1)
      break
    case '2':
      list = list.filter((prod) => parseFloat(prod.review_point) >= 1 && parseFloat(prod.review_point) < 2)
      break
    case '3':
      list = list.filter((prod) => parseFloat(prod.review_point) >= 2 && parseFloat(prod.review_point) < 3)
      break
    case '4':
      list = list.filter((prod) => parseFloat(prod.review_point) >= 3 && parseFloat(prod.review_point) < 4)
      break
    case '5':
      list = list.filter((prod) => parseFloat(prod.review_point) >= 4.0 && parseFloat(prod.review_point) <= 5.0)
      break
    default:
      break
  }
  return list
}
