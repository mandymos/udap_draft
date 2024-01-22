import router from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoggedInUser, setToken } from '../../redux/userSlice'

export default function HeaderUserCard({ user }) {
  const dispatch = useDispatch()

  const onLogoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(setLoggedInUser(undefined))
    dispatch(setToken(undefined))
    router.push(`/`)
  }

  return (
    <div
      className="flex flex-col mr-4 pr-4 items-end"
      style={{ borderRight: 'solid 1px #ccc' }}
    >
      <p className="m-0 -mb-1 leading-2 text-sm font-bold text-white">
        {user.given_name} {user.family_name}
      </p>
      <a
        className="m-0 text-xs hover:text-white text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis"
        onClick={onLogoutHandler}
      >
        Log out
      </a>
    </div>
  )
}
