import { createMuiTheme } from '@material-ui/core/styles'
import { teal, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: pink[600],
        },
        secondary: {
            main: teal[100],
        },
    },
    typography: {
        // Use the system font.
        fontSize: 12,
        fontFamily: 'Balsamiq Sans'
      },
})

export default theme;