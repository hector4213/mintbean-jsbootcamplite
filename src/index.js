import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import './index.css'
import App from './App'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#FFFF00',
		},
		type: 'dark',
	},
	typography: {
		fontFamily: ['Fira Code', 'monospace'].join(','),
	},
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.getElementById('root'),
)
