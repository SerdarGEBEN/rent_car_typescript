import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8c2e9804dfmshc875bb7f07d85f1p10958djsn65334f790735",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// Fonksiyon asenkron olduğundan ve bir return değerine sahip olduğundan dolayı return tipini belirlerken
//sadece return edilen tipi "CarType[]" ifade etmek yerine bu fonksiyonun hata da döndürebilecğeinden
//ve asenkdron olduğunda dolayı bu tipi react'ın içerisnde bulunan
//Promise tipine generic olarak göndererek return tipini belirledik
// Fonksiyon asenkron olduğundan ve bir return değerine sahip olduğundan dolayı return tipini belirlerken
// sadece return edilen tipi "CarType[]" ifade etmek yerine bu fonksiyonun hata da döndürebilecğeinden ve
//asenkdron olduğunda dolayı bu tipi react'ın içerisnde bulnan Promise tipine generic olarak göndererek return tipini belirledik

type Parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  fuel_type = "",
  year = "",
}: Parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;

    const res = await fetch(url, options);

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("hata");
  }
};

export default fetchCars;
