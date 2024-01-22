import { Layout } from 'antd'
import HeaderUserCard from './HeaderUserCard'
import { useSelector } from 'react-redux'
import { getLoggedInUser } from '../../redux/userSlice'

const { Header } = Layout

function LayoutHeader() {
  const user = useSelector(getLoggedInUser)

  return (
    <Header
      className="flex flex-row items-center justify-between sticky top-0 z-10 bg-cover bg-center"
      style={{
        paddingInline: '25px',
      }}
    >
      <p className="my-0 text-lg font-bold" style={{ color: 'white' }}>
        UDAP
      </p>

      <div className="flex flex-row justify-center items-center">
        {!!user && <HeaderUserCard user={user} />}
        <p className="my-0 text-lg font-bold" style={{ color: 'white' }}></p>
      </div>
    </Header>
  )
}

export default LayoutHeader
