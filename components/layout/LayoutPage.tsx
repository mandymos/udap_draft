import { AppstoreAddOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Head from 'next/head'

import { useRouter } from 'next/router.js'

function PageBreadcrumb({ breadcrumb }: { breadcrumb?: any }) {
  const router = useRouter()
  if (breadcrumb == undefined || breadcrumb.length === 0) return <></>

  return (
    <Breadcrumb className="mx-4 mt-4">
      <Breadcrumb.Item href="/">
        <AppstoreAddOutlined />
        <span>Dashboard</span>
      </Breadcrumb.Item>
      {breadcrumb.map((item, index) => (
        <Breadcrumb.Item
          key={index}
          onClick={(_) => {
            if (!!item.href) router.push(item.href)
          }}
        >
          {item.icon}
          <span>{item.text}</span>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

function LayoutPage({
  children,
  props,
  actionPanel = null,
  searchPanel = null,
}: {
  children: React.ReactNode
  props: any
  actionPanel?: React.ReactNode
  searchPanel?: React.ReactNode
}) {
  return (
    <div className="mb-4 flex flex-col grow min-h-full">
      <Head>
        <title>{`${props.title} - UDAP`}</title>
      </Head>
      <div
        className="px-4 pt-4 pb-2"
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 20,
          width: '100%',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div className="flex flex-row justify-between gap-4 min-h-[56px]">
          <div className="flex flex-col min-w-0 self-center">
            <div className="flex flex-row items-center gap-2">
              <p className="m-0 text-2xl font-bold truncate">{props.title}</p>
            </div>
            {props.description && (
              <p className="m-0 text-base text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                {props.description}
              </p>
            )}
          </div>
          <div className="flex items-center flex-shrink-0">{actionPanel}</div>
        </div>
      </div>

      <div className="mx-4 flex flex-col grow">{children}</div>
    </div>
  )
}

export default LayoutPage
