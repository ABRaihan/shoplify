import 'styled-components';
import { theme } from "./tokens";

type Theme = typeof theme.light;
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
