import axios from 'axios'
import { IUser } from '../../interfaces/IUser'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
async function handleLogin(user: IUser): Promise<any> {
  try {
    const res = await axios.post(API_BASE_URL, user)
    return true
  } catch (err) {
    console.log(err)
  }
}

async function discoveryQuery(query: string, token): Promise<any> {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const res = await axios.get(query, config).then((response) => response.data)
    return res
  } catch (err) {
    console.log(err)
  }
}

export { discoveryQuery, handleLogin }
