/*
For use with Material UI version 3+

-----

USAGE:

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { mui3theme as dhis2theme } from '@dhis2/core'
// OR: import { theme as dhis2theme } from '@dhis2/core/theme/dhis2.mui3.theme'

const MyApp = (
    <MuiThemeProvider theme={createMuiTheme(dhis2theme)}>
        ...<MyAppComponents />...
    </MuiThemeProvider
)

-----

To override (for development purposes only):

import { theme as dhis2theme } from '@dhis2/d2-ui-core/theme/dhis2.mui3.theme'
const customTheme = {
  ...dhis2theme,
  overrides: {
    ...dhis2theme.overrides,
    MuiToolbar: { ... },
  },
  ...etc
}
*/

// Color palette from https://projects.invisionapp.com/share/A7LT4TJYETS#/screens/302550228_Color
export var colors = {
    accentPrimary: '#1976d2',
    accentPrimaryDark: '#004BA0',
    accentPrimaryLight: '#63A4FF',
    accentPrimaryLightest: '#EAF4FF',

    accentSecondary: '#00796B',
    accentSecondaryDark: '#004C40',
    accentSecondaryLight: '#48A999',
    accentSecondaryLightest: '#B2DFDB',

    black: '#000000',
    greyBlack: '#494949',
    grey: '#9E9E9E',
    greyLight: '#E0E0E0',
    blueGrey: '#ECEFF1',
    snow: '#F4F6F8',
    white: '#FFFFFF',

    negative: '#E53935',
    warning: '#F19C02',
    positive: '#3D9305',
    info: '#EAF4FF'
};

export var palette = {
    common: {
        white: colors.white,
        black: colors.black
    },
    action: {
        active: colors.greyBlack,
        disabled: colors.greyLight
    },
    text: {
        primary: colors.black,
        secondary: colors.greyBlack,
        disabled: colors.grey,
        hint: colors.grey
    },
    primary: {
        main: colors.accentPrimary,
        dark: colors.accentPrimaryDark,
        light: colors.accentPrimaryLight,
        lightest: colors.accentPrimaryLightest // Custom extension, not used by default
    },
    secondary: {
        main: colors.accentSecondary,
        dark: colors.accentSecondaryDark,
        light: colors.accentSecondaryLight,
        lightest: colors.accentSecondaryLightest // Custom extension, not used by default
    },
    error: {
        main: colors.negative // This is automatically expanded to main/light/dark/contrastText
    },
    status: {
        // Custom colors collection, not used by default in MUI
        negative: colors.negative,
        warning: colors.warning,
        positive: colors.positive,
        info: colors.info
    },
    background: {
        paper: colors.white,
        default: colors.snow,
        grey: '#FCFCFC',
        hover: colors.greyLight
    },
    divider: colors.greyLight,

    // Custom color, not used by default in MUI
    shadow: colors.grey
};

var spacingUnit = 8;

export var theme = {
    colors: colors,
    palette: palette,
    typography: {
        fontSize: 16,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        useNextVariants: true
    },
    spacing: {
        unit: spacingUnit
    },
    overrides: {
        MuiDivider: {
            light: {
                backgroundColor: palette.divider // No light dividers for now
            }
        },
        MuiDialogTitle: {
            root: {
                padding: spacingUnit * 2.5 + 'px ' + spacingUnit * 3 + 'px ' + spacingUnit * 0.5 + 'px',
                fontSize: '1em',
                fontWeight: 'bold'
            }
        },
        MuiDialogContent: {
            root: {
                margin: spacingUnit * 3,
                padding: 0,
                '&:first-child': {
                    paddingTop: 0
                }
            }
        },
        MuiDialogActions: {
            root: {
                padding: spacingUnit * 1.5 + 'px ' + spacingUnit * 3 + 'px',
                margin: 0,
                '&> *:last-child': {
                    marginRight: 0
                },
                borderTop: '1px solid ' + palette.divider
            }
        }
    }
};

export default theme;