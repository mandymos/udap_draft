import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import Keycloak from 'keycloak-js'
import router from 'next/router'
import { useDispatch } from 'react-redux'
import { handleLogin } from '../../pages/api/api'
import { setLoggedInUser, setToken } from '../../redux/userSlice'

export default function LoginPage() {
  const dispatch = useDispatch()

  const onFinish = async (values: any) => {
    const res = handleLogin(values)
    dispatch(setLoggedInUser('True'))

    // need to write function for log in here
  }
  let initOptions = {
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
    clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    onLoad: 'login-required',
    KeycloakResponseType: 'code',
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
  }

  const keyCloakLogin = () => {
    const keycloak = new Keycloak(initOptions)
    keycloak
      .init({
        onLoad: 'login-required',
        pkceMethod: 'S256',
      })
      .then(
        (auth) => {
          if (!auth) {
            console.log('not auth')
            window.location.reload()
          } else {
            dispatch(setLoggedInUser(keycloak.tokenParsed))
            dispatch(setToken(keycloak.token))
            return router.push(`/`)
          }
        },
        () => {
          console.error('Authenticated Failed')
        }
      )
  }

  return (
    <div className="login-form">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="login-form-button bg-sky-950 text-white"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>

      <Button
        className="login-form-button w-10 "
        onClick={() => keyCloakLogin()}
      >
        Sign in with Keycloak
      </Button>
    </div>
  )
}
