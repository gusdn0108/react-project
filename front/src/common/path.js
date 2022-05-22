export const apiurl = process.env.REACT_APP_API_URL

const auth = `${apiurl}/auth`
const board = `${apiurl}/board`
// ------------------------------auth---------------------------------
export const AUTH_SIGNUP = `${auth}/signup`
export const AUTH_SIGNIN = `${auth}/signin`

// ------------------------------board---------------------------------

export const BOARD_WRITE = `${board}/write`



