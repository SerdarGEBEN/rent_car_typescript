import { CarType } from "../types";
import { colors } from "./constants";

/* araç resimlerini oluşturmak için imagin.studio api kullanıyoruz. */
const generatelmage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");

  // açı paaramı gelirse url' e ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  //dizinin uzunluğu kadar rastgele sayı belirle
  const i = Math.round(Math.random() * colors.length);

  // diziden rastgele alınan rengi param olarak ekle
  url.searchParams.append("paintId", colors[i]);

  //url nin son halini return ediyoruz
  return url.href;
};

export default generatelmage;
