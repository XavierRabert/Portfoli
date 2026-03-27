import ca from "@/data/ca.json";
import es from "@/data/es.json";

export function getData(locale: string) {
  return locale === "es" ? es : ca;
}
