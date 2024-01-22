import { Button, Form, Input, Select, Space } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { discoveryQuery } from '../../pages/api/api'
import { getToken } from '../../redux/userSlice'
export default function DiscoveryQueryInput() {
  const urlList = [
    {
      value: 'http://localhost:8080',
      label: 'http://localhost:8080',
    },
    {
      value: 'https://pokeapi.co/api/v2/pokemon',
      label: 'https://pokeapi.co/api/v2/pokemon',
    },
    { value: 'https:/efg.com', label: 'https:/efg.com' },
  ]
  const [queryResult, setQueryResult] = useState('')
  const token = useSelector(getToken)

  const onFinish = async (values: any) => {
    const res = await discoveryQuery(
      values.url + '/' + (values.param || ''),
      token
    )
    setQueryResult(JSON.stringify(res))
  }
  return (
    <div
      className=" flex flex-col grow min-h-full px-4 pt-4 pb-2 print:block"
      style={{
        position: 'sticky',
        top: '64px',
        zIndex: 20,
        width: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Form
        layout="inline"
        className="gap-4 dense"
        onFinish={onFinish}
        size="large"
      >
        <Form.Item label="URL">
          <Space.Compact>
            <Form.Item name="url" noStyle initialValue={urlList[0].value}>
              <Select
                size="large"
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  margin: 0,
                  minWidth: '300px',
                }}
                options={urlList}
              ></Select>
            </Form.Item>
            <Form.Item name="param" noStyle>
              <Input
                size="large"
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  margin: 0,
                  minWidth: '120px',
                }}
                placeholder="Input param"
              />
            </Form.Item>
          </Space.Compact>
          <Button
            size="large"
            type="primary"
            style={{
              flexGrow: 1,
              flexShrink: 1,
              marginLeft: 30,
            }}
            htmlType="submit"
          >
            Query
          </Button>
        </Form.Item>
      </Form>
      <div>{queryResult}</div>
    </div>
  )
}
