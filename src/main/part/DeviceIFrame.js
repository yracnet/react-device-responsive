import { useState } from 'react'
import ReactDOM from 'react-dom';
import { useLocalStorage } from 'react-use-storage'
import { createDeviceStyle } from '_/helpers/style'
import { DEVICE_DEFAULT } from '_/settings/devices'

const assertDocumentBody = (iframe) => {
  try {
    return iframe?.contentWindow?.document?.body
  } catch (e) {
    console.error('Error', e);
    return undefined;
  }
}

export const DeviceIFrame = ({ title, children, src }) => {
  const [device] = useLocalStorage('device', DEVICE_DEFAULT)
  const style = createDeviceStyle(device)
  const [content, setContent] = useState(null)
  const onLoad = ({ target }) => {
    console.log('target', target);
    const targetBody = assertDocumentBody(target)
    if (!src && targetBody) {
      let data = ReactDOM.createPortal(children, targetBody)
      setContent(data)
      console.log('data', data);
    }
  }
  return (
    <div className="content-expand p-1">
      <iframe title={title}
        src={src}
        onLoad={onLoad}
        className="border border-primary"
        style={style}>
        {content}
      </iframe>
    </div>
  )
}


