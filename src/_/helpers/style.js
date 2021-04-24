export const createDeviceStyle = (device = {}) => {
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
    return style
}