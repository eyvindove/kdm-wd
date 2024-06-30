import { wmoCode } from "@src/utils/config/wmo-code";

export function transferWMOCode(code) {
  return wmoCode?.[code] ?? "-";
}
