import { useLocalStorage } from 'react-use-storage'
import { DEVICE_DEFAULT, DEVICE_SUPPORT } from '_/settings/devices'

export const DeviceSupport = () => {
  const [device, setDevice] = useLocalStorage('device', DEVICE_DEFAULT)
  const onDiviceRotate = () => {
    setDevice({ ...device, vertical: !device.vertical })
  }
  const onDiviceSelect = (it1, it2) => {
    setDevice({ device: it1.name, ...it2, vertical: false })
  }
  const onDiviceScale = (inc) => {
    setDevice({
      ...device,
      scale: device.scale + inc
    })
  }
  return (
    <div className="text-center">
      <div className="btn-group mr-2">
        <button className="btn btn-sm btn-outline-primary"
          onClick={onDiviceRotate}>
          <i className={`la la-grip-${device.vertical ? 'vertical' : 'horizontal'} la-lg`} />
        </button>
      </div>
      <div className="btn-group mr-2">
        {
          DEVICE_SUPPORT
            .map(it1 => (
              <div className="btn-group">
                <a key={it1.name}
                  className={`btn btn-sm btn-${it1.name === device.device ? 'primary' : 'outline-primary'} dropdown-toggle`}
                  data-toggle="dropdown">
                  <i className={`la ${it1.icon} la-lg mr-2`} />
                  {it1.name}
                </a>
                <div className="dropdown-menu dropdown-menu-grid">
                  {it1.support.map(it2 => (
                    <button
                      className="dropdown-item"
                      onClick={e => onDiviceSelect(it1, it2)}>
                      <i className={`la ${it1.icon} la-lg mr-1`} />
                      {it2.name} ({it2.display})
                    </button>
                  ))}
                </div>
              </div>
            ))
        }
      </div>
      <div className="btn-group">
        <span className="btn btn-sm text-muted">
          {device.name} - {device.display}
        </span>
      </div>
      <div className="btn-group mr-2">
        <button className="btn btn-sm btn-outline-primary"
          onClick={e => onDiviceScale(-0.05)}>
          <i className="las la-search-minus" />
        </button>
        <button className="btn btn-sm btn-outline-primary"
          onClick={e => onDiviceScale(1 - device.scale)}>
          {device.scale.toFixed(2)}
        </button>
        <button className="btn btn-sm btn-outline-primary"
          onClick={e => onDiviceScale(+0.05)}>
          <i className="las la-search-plus" />
        </button>
      </div>
    </div>
  )
}
