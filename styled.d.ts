/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components/native';

declare module 'styled-components' {
    export interface DefaultTheme {
        FONT_COLOR: string;
        SECTION_COLOR: string;
        BACKGROUND_COLOR: string;
        THEME_ACTIVE_COLOR: string;
        THEME_INACTIVE_COLOR: string;
    }
}
