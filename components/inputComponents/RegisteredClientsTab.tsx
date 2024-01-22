import { Button } from 'antd'

export default function RegisteredClientsTab() {
  return (
    <div className="flex justify-ends gap-4">
      <Button type="primary">RESET LOCAL REGISTERED CLIENTS</Button>
      <Button type="primary">SAVE CHANGES</Button>
    </div>
  )
}
