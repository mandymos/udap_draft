import { Form, Select, Tabs, TabsProps } from 'antd'
import BuildForm from './BuildForm'
import ClientCertificateTab from './ClientCertificateTab'
import RegisteredClientsTab from './RegisteredClientsTab'

export default function UdapRegistration() {
  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'CLIENT CERTIFICATE',
      children: <ClientCertificateTab />,
    },
    {
      key: '2',
      label: 'REGISTERED CLIENTS',
      children: <RegisteredClientsTab />,
    },
  ]
  const oauthFlowList = [
    { value: 'client_credentials', label: 'client_credentials' },
    { value: 'authorization_code (B2B)', label: 'authorization_code (B2B)' },
    {
      value: 'authorization_code (Consumer)',
      label: 'authorization_code (Consumer)',
    },
  ]
  const signingAlgorithmList = [
    { value: 'RS256', label: 'RS256' },
    { value: 'RS384', label: 'RS384' },
    {
      value: 'ES256',
      label: 'ES256',
    },
    {
      value: 'ES384',
      label: 'ES384',
    },
  ]
  return (
    <div>
      <div className="h-100 w-full bg-white space-x-4 rounded-sm shadow-md ">
        <div className="rounded-sm shadow-md m-3">
          <Tabs
            className="m-3"
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
        <div className="flex justify-between items-end">
          <Form.Item
            label="Selection OAuth2Flow Flow"
            name="oAuthFlow"
            initialValue={oauthFlowList[0].value}
            labelCol={{ span: 24 }}
            style={{ width: '31%' }}
          >
            <Select
              options={oauthFlowList}
              defaultValue={oauthFlowList[0].value}
            />
          </Form.Item>
          <Form.Item name="subjectAltName" style={{ width: '31%' }}>
            <Select placeholder="Select Subject Alt Name" />
          </Form.Item>
          <Form.Item
            label="Selection Signing Algorithm"
            name="signingAlgorithm"
            initialValue={signingAlgorithmList[0].value}
            labelCol={{ span: 24 }}
            style={{ width: '31%' }}
          >
            <Select
              options={signingAlgorithmList}
              defaultValue={signingAlgorithmList[0].value}
            />
          </Form.Item>
        </div>
      </div>
      <BuildForm
        title={'Build Raw Software Statements for Registration'}
        button1={{ buttonTitle: 'BUILD REGISTER', disabled: true }}
        button2={{ buttonTitle: 'BUILD CANCEL', disabled: true }}
        checkbox="Tiered Oauth"
        result1={'Raw software Statement'}
        result2={'x509 certificates from x5c'}
      />
      <BuildForm
        button1={{ buttonTitle: 'BUILD REQUEST BODY', disabled: true }}
        result1={'Request body Actual software statement'}
        result2={'Explanation Todo'}
      />
      <BuildForm
        button1={{ buttonTitle: 'REGISTER (DCR)', disabled: true }}
        result1={'Registration response'}
        result2={'Explanation Todo'}
      />
    </div>
  )
}
