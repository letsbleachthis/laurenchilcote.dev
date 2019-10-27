import Typography from "typography"
import altonTheme from "typography-theme-alton"
import { redirectTo } from "@reach/router";

const typography = new Typography(altonTheme)
export const { scale, rhythm, options } = typography

export default typography