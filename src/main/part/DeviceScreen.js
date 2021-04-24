import { useRef } from 'react'
import { useLocalStorage } from 'react-use-storage'
import { createDeviceStyle } from '_/helpers/style'
import { DEVICE_DEFAULT } from '_/settings/devices'


export const DeviceScreen = ({ children }) => {
  const [device] = useLocalStorage('device', DEVICE_DEFAULT)
  const style = createDeviceStyle(device)
  return (
    <div className="content-expand">
      <div style={style}
        className="border border-primary">
        {children}
      </div>
    </div>
  )
}


