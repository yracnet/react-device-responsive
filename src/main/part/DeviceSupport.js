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
        {
          DEVICE_SUPPORT
            .map((it1, ix1) => (
              <div className="btn-group"
                key={it1.name + '-' + ix1}>
                <a key={it1.name}
                  className={`btn btn-sm btn-${it1.name === device.device ? 'primary' : 'outline-primary'} dropdown-toggle`}
                  data-toggle="dropdown"
                  href="#/">
                  <i className={`la ${it1.icon} la-lg mr-2`} />
                  {it1.name}
                </a>
                <div className="dropdown-menu dropdown-grid">
                  <div className="dropdown-content">
                    {it1.support
                      .map((it2, ix2) => (
                        <button onClick={e => onDiviceSelect(it1, it2)}
                          className="dropdown-item border border-primary"
                          key={it2.name + '_' + ix2}>
                          <div>
                            <i className={`la ${it1.icon} la-lg mr-1`} />
                            {it2.name}
                          </div>
                          <code>{it2.display}</code>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            ))
        }
      </div>
      <div className="btn-group mr-2">
        <span className="btn btn-sm border border-primary text-muted">
          {device.name} - {device.display}
        </span>
        <button className="btn btn-sm btn-outline-primary"
          onClick={onDiviceRotate}>
          <i className={`la la-${device.vertical ? 'mobile' : 'tablet'} la-lg`} />
        </button>
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
