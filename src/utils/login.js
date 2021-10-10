import getAccount from './getAccount'

export default function login(details) {
  const temp = getAccount(details)
  console.log(temp.password)
}
