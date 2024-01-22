import {
  DatePicker,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Table,
} from 'antd'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { patientSortOptions, stateOptions } from '../../interfaces/enums'
import LayoutSortOptions from '../LayOutSortOptions'
export default function PatientSearch() {
  const { RangePicker } = DatePicker
  const [initLoading] = useState(false)
  const [patientData, setPatientData] = useState<any>()
  const [searchPatientForm] = Form.useForm()
  const [hasFilter, setHasFilter] = useState<boolean>(false)
  const [displayOptions, setDisplayOptions] = useState<any>(['Raw', 'Pretty'])
  const [displayValue, setDisplayValue] = useState<string>('Raw')
  const onDisplayChange = ({ target: { value } }: RadioChangeEvent) => {
    setDisplayValue(value)
  }
  const [searchType, setSearchType] = useState<string>('Patient')
  const patientDataSource = [
    {
      title: 'Resource Type',
      dataIndex: 'resourceType',
      key: 'resourceType',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Given Name',
      dataIndex: 'givenName',
      key: 'givenName',
      render: () => <span>{patientData.name[0].given[0]}</span> || '',
    },
    {
      title: 'Family Name',
      dataIndex: 'familyName',
      key: 'familyName',
      render: () => <span>{patientData.name[0].family}</span> || '',
    },
    {
      title: 'SSN',
      dataIndex: 'ssn',
      key: 'ssn',
      render: () => (
        <span>
          {patientData.identifier.find(
            (identifier) =>
              identifier.type?.coding?.[0]?.display === 'Social Security Number'
          ).value || ''}
        </span>
      ),
    },
    {
      title: 'MRN',
      dataIndex: 'mrn',
      key: 'mrn',
      render: () => (
        <span>
          {patientData.identifier.find(
            (identifier) =>
              identifier.type?.coding?.[0]?.display === 'Medical Record Number'
          ).value || ''}
        </span>
      ),
    },
    {
      title: "Driver's License",
      dataIndex: 'driverLicense',
      key: 'driverLicense',
      render: () => (
        <span>
          {patientData.identifier.find(
            (identifier) =>
              identifier.type?.coding?.[0]?.display === "Driver's License"
          ).value || ''}
        </span>
      ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: () => <span>{patientData.gender}</span> || '',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      render: () => <span>{patientData.birthDate}</span> || '',
    },
  ]
  const columns: ColumnsType<IPatient> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'SSN',
      dataIndex: 'ssn',
      key: 'ssn',
    },
    {
      title: 'MRN',
      dataIndex: 'mrn',
      key: 'mrn',
    },
  ]
  const [data, setData] = useState<IPatient[]>([])
  const [prettyTable, setPrettyTable] = useState<any>([])

  const getPatientData = async (data) => {
    let query = 'http://localhost:8091/fhir/Patient?'
    console.log(
      'data.identifier: ',
      data.identifier,
      Boolean(data.identifier),
      'length: ',
      Object.values(data).filter((value) => value !== undefined && value !== '')
        .length === 1
    )
    if (Boolean(data.identifier)) {
      setSearchType('id')
      console.log('id search', searchType)
      query = 'http://localhost:8091/fhir/Patient/' + data.identifier
    } else {
      setSearchType('Patient')
      console.log('patient search', searchType)

      for (let key in data) {
        if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
          query += `${key}=${data[key]}&`
        }
      }
    }

    query = query.replace('@', '%40')
    try {
      const res = await axios.get(query, {
        headers: {
          Accept: 'application/fhir+json',
        },
      })
      setPatientData(res.data)
      let patientArr = []
      if (!res.data.total) {
        patientArr = [
          {
            id: res.data.id,
            name: res.data.name[0].given[0],
            ssn: res.data.identifier.find(
              (identifier) =>
                identifier.type?.coding?.[0]?.display ===
                'Social Security Number'
            ).value,
            mrn: res.data.identifier.find(
              (identifier) =>
                identifier.type?.coding?.[0]?.display ===
                'Medical Record Number'
            ).value,
          },
        ]
        setData(patientArr)
      } else {
        for (let i = 0; i < res.data.entry.length; i++) {
          let patient = res.data.entry[i].resource
          let tempObj = {
            id: patient.id,
            name: patient.name[0].given[0],
            ssn: patient.identifier.find(
              (identifier) =>
                identifier.type?.coding?.[0]?.display ===
                'Social Security Number'
            ).value,
            mrn: patient.identifier.find(
              (identifier) =>
                identifier.type?.coding?.[0]?.display ===
                'Medical Record Number'
            ).value,
          }
          patientArr.push(tempObj)
        }
        setData(patientArr)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const loadPatient = useCallback(async () => {
    try {
      //   const sortAttributes = searchPatientForm.getFieldValue('sort')
      //   const policy = searchPatientForm.getFieldValue('policy')
      getPatientData(searchPatientForm.getFieldsValue())
    } catch (err) {
      console.log(err)
    }
  }, [searchPatientForm])

  const SearchPanel = useCallback(() => {
    return (
      <div className="flex flex-col">
        <Form
          form={searchPatientForm}
          layout="inline"
          className="gap-4"
          onChange={loadPatient}
        >
          <Form.Item
            name="name"
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
            name="family"
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
            name="identifier"
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
            name="birthdate"
            style={{
              margin: 0,
              flexGrow: 0,
              flexShrink: 1,
            }}
          >
            <DatePicker
              placeholder={'Date of Birth'}
              className="w-full"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="deathdate"
            style={{
              margin: 0,
              flexGrow: 0,
              flexShrink: 1,
            }}
          >
            <DatePicker
              placeholder={'Date of Death'}
              className="w-full"
              size="large"
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
            name="_text"
            style={{
              margin: 0,
              flexGrow: 1,
              flexShrink: 0,
              minWidth: '200px',
            }}
          >
            <Input size="large" placeholder="Text" />
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

      {/* <List
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={patientData}
        renderItem={(item: any) => <List.Item />}
      /> */}
      <div>
        <Radio.Group
          options={displayOptions}
          onChange={onDisplayChange}
          value={displayValue}
        />
        <br />
        {displayValue === 'Raw' ? (
          <pre>{JSON.stringify(patientData, null, 2)}</pre>
        ) : null}
        {displayValue === 'Pretty' && patientData ? (
          <Table columns={columns} dataSource={data} />
        ) : null}
      </div>
    </div>
  )
}
