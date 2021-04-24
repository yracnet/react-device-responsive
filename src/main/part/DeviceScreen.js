import { useRef } from 'react'
import { useLocalStorage } from 'react-use-storage'
import { DEVICE_DEFAULT } from '_/settings/devices'


export const DeviceScreen = ({ children }) => {
  const [device, setDevice] = useLocalStorage('device', DEVICE_DEFAULT)
  const ref = useRef('iframe')
  let style = {
    width: device.vertical ? device.width : device.height,
    height: device.vertical ? device.height : device.width
  }
  style.minWidth = style.maxWidth = style.width;
  style.minHeight = style.maxHeight = style.height;
  style.overflow = 'auto'
  style.display = 'block'
  style.margin = '0 auto'
  style.transform = 'scale(' + device.scale + ')';
  return (
    <div className="center expand-content">
      <iframe style={style} src="https://yracnet.github.io/react-grid/" ref={ref}>
      </iframe>
      <div style={style} className="border border-primary">
        {children}
      </div>
    </div>
  )
}


