import { Button, Checkbox } from 'antd'
interface IBuildFormProps {
  title?: string
  button1?: { buttonTitle: string; disabled: boolean }
  button2?: { buttonTitle: string; disabled: boolean }
  checkbox?: string
  result1: string
  result2: string
}
export default function BuildForm(props: IBuildFormProps) {
  return (
    <div className="h-100 w-full bg-white space-x-4 rounded-sm shadow-md mt-3 ">
      <div className="m-3 ">{props.title}</div>
      <div className="flex justify-ends gap-4">
        <Button type="primary" disabled={props.button1.disabled}>
          {props.button1.buttonTitle}
        </Button>
        {!!props.button2 && (
          <Button type="primary" disabled={props.button2.disabled}>
            {props.button2.buttonTitle}
          </Button>
        )}
        {!!props.checkbox && <Checkbox>{props.checkbox}</Checkbox>}
      </div>
      <div className="flex justify-between">
        <div
          className="h-60bg-white space-x-4 rounded-sm shadow-md m-3 "
          style={{ width: '49%' }}
        >
          {props.result1}
        </div>
        <div
          className="h-60 bg-lime-300 space-x-4 rounded-sm shadow-md m-3 "
          style={{ width: '49%' }}
        >
          {props.result2}
        </div>
      </div>
    </div>
  )
}
