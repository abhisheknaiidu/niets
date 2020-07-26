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
      overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
              background:
                "url('https://images.unsplash.com/photo-1524194330928-5d5120bd6515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80') no-repeat center center fixed",
              backgroundSize: 'cover',
            }
          }
        }
      }
})

export default theme;