import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons'
import { Button, Cascader, CascaderProps, SelectProps } from 'antd'
import { find } from 'lodash'
interface ISortOption {
  value: string | number
  label: string
  children?: SelectProps['options']
}
interface ILayoutSortOptionsProps {
  options: Array<ISortOption>
}
type CascaderExtendedProps = CascaderProps<ISortOption> &
  ILayoutSortOptionsProps

export default function LayoutSortOptions(props: CascaderExtendedProps) {
  const { value, options } = props

  const labelValue: string = !!value && value[0] ? value[0].toString() : ''
  const orderValue: string = !!value && value[1] ? value[1].toString() : ''

  const selectedAttrOption = find(options, ['value', labelValue])
  const selectedOrderOption = !!selectedAttrOption
    ? find(selectedAttrOption.children, ['value', orderValue])
    : { label: 'asc' }

  return (
    <Cascader {...props}>
      <Button
        size="large"
        icon={
          orderValue == 'desc' ? (
            <SortDescendingOutlined />
          ) : (
            <SortAscendingOutlined />
          )
        }
        data-testid={labelValue + '-' + orderValue}
      >
        {selectedAttrOption?.label} {selectedOrderOption?.label}
      </Button>
    </Cascader>
  )
}
