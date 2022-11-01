import {Icon} from '@iconify/react'
import {colors} from '../../assets/colors'

function IconifyIcon({height = 28, width = 28, color = colors.dark.main, style = null, icon}) {
  return <Icon icon={icon} height={height} width={width} color={color} style={style} />
}

export default IconifyIcon
