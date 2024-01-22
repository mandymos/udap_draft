import { DatePicker, Form, Input, List, Select } from 'antd'
import { useCallback, useState } from 'react'
import { patientSortOptions, stateOptions } from '../../interfaces/enums'
import LayoutSortOptions from '../LayOutSortOptions'

export default function PatientMatch(props) {
  const { RangePicker } = DatePicker
  const [initLoading] = useState(false)
  const [patientData, setPatientData] = useState<any[]>([])
  const [searchPatientForm] = Form.useForm()
  const [hasFilter, setHasFilter] = useState<boolean>(false)
  const loadPatient = useCallback(async () => {
    try {
      const sortAttributes = searchPatientForm.getFieldValue('sort')
      const policy = searchPatientForm.getFieldValue('policy')

      setHasFilter(policy?.length > 0)
    } catch (err) {
      console.log(err)
    }
  }, [searchPatientForm])

  const SearchPanel = useCallback(() => {
    return (
      <div className="flex flex-col">
        <Form
          layout="inline"
          initialValues={{ sort: ['memberDateOfBirth', 'desc'] }}
          className="gap-4"
        >
          <Form.Item
            name="firstName"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Input size="large" placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Input size="large" placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Input size="large" placeholder="Phone" />
          </Form.Item>
          <Form.Item
            name="id"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Input size="large" placeholder="Identifier" />
          </Form.Item>
          <Form.Item
            name="memberDateOfBirth"
            style={{
              margin: 0,
              flexGrow: 0,
              flexShrink: 1,
            }}
          >
            <RangePicker
              placeholder={['Date of Birth', 'Range']}
              className="w-full"
              size="large"
              format="MM/DD/YYYY"
            />
          </Form.Item>
          <Form.Item
            name="memberDateOfDeath"
            style={{
              margin: 0,
              flexGrow: 0,
              flexShrink: 1,
            }}
          >
            <RangePicker
              placeholder={['Date of Death', 'Range']}
              className="w-full"
              size="large"
              format="MM/DD/YYYY"
            />
          </Form.Item>
          <Form.Item
            name="state"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Select
              placeholder="State"
              mode="tags"
              size="large"
              allowClear
              maxTagCount="responsive"
              showSearch
              options={stateOptions}
              data-testid="idCard-search-btn-policy"
              min-length="3"
            />
          </Form.Item>
          <Form.Item
            name="gender"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '100px',
            }}
          >
            <Select
              placeholder="Gender"
              mode="tags"
              size="large"
              allowClear
              maxTagCount="responsive"
              showSearch
              options={[
                { label: 'male', value: 'male' },
                { label: 'female', value: 'female' },
              ]}
              data-testid="idCard-search-btn-policy"
              min-length="3"
            />
          </Form.Item>
          <Form.Item
            name="practitioner"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '200px',
            }}
          >
            <Input size="large" placeholder="Practitioner" />
          </Form.Item>
          <Form.Item
            name="organization"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '200px',
            }}
          >
            <Input size="large" placeholder="Organization" />
          </Form.Item>
          <Form.Item name="sort" className="mr-0">
            <LayoutSortOptions options={patientSortOptions} />
          </Form.Item>
        </Form>
      </div>
    )
  }, [RangePicker, searchPatientForm])

  return (
    <div>
      <SearchPanel />
      <List
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={patientData}
        renderItem={(item: any) => <List.Item />}
      />
    </div>
  )
}
