/* import external modules */
import { Typography } from '@material-ui/core'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Aveil '}
      {new Date().getFullYear()}
      {'. '}
      {'All rights reserved.'}
    </Typography>
  )
}

export default Copyright
