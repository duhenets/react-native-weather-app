/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components/native';

declare module 'styled-components' {
    export interface DefaultTheme {
        FONT_COLOR: string;
        SECTION_COLOR: string;
        BACKGROUND_COLOR: string;
        PRIMARY_COLOR: string;
        SECONDARY_COLOR: string;
    }
}
