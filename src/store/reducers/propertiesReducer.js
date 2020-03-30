import first from '../../img/properties/LEH_6910.jpg';
import second from '../../img/properties/LEH_6914.jpg';
import third from '../../img/properties/LEH_6940.jpg';

const initialState = {
  properties: [
    {
      propertyId: 1,
      propertyName: 'Dom w górach',
      propertyDescription: 'Piękny dom z widokiem na góry',
      purpose: 'Na sprzedaż',
      market: 'Rynek wtórny',
      type: 'Dom',
      price: 299999,
      metrage: 150,
      rooms: 10,
      mainImgUrl: first,
      imgUrlArr: [first, second, third, first, second, third],
      propertyPlanUrl: 'xxx',
      oldCase: false,
      floor: '-',
      numbOfFloors: 2,
      elevator: 'Brak',
      kitchen: 'Kuchnia otwarta z oknem',
      standard: 'Wysoki',
      balcony: ['Taras', 'Ogródek'],
      garage: 'Garaż',
      year: 2010,
      technology: 'Pustak ceramiczny',
      extra: ['Pod inwestycje', 'Tylko u nas', 'Obniżona cena', 'Pilne']
    },
    {
      propertyId: 2,
      propertyName: 'Dom nad morzem',
      propertyDescription: 'Piękny dom z widokiem na morze',
      purpose: 'Na sprzedaż',
      market: 'Rynek wtórny',
      type: 'Dom',
      price: 299999,
      metrage: 150,
      rooms: 10,
      mainImgUrl: second,
      imgUrlArr: [],
      propertyPlanUrl: 'xxx',
      oldCase: false,
      floor: '-',
      numbOfFloors: 2,
      elevator: false,
      kitchen: 'Kuchnia otwarta z oknem',
      standard: 'Wysoki',
      balcony: ['Taras', 'Ogródek'],
      garage: 'Garaż',
      year: 2010,
      technology: 'Pustak ceramiczny',
      extra: ['Pod inwestycje', 'Tylko u nas', 'Obniżona cena', 'Pilne']
    },
    {
      propertyId: 3,
      propertyName: 'Apartament przy ul. Cystersów',
      propertyDescription: 'Piękne mieszkanie z widokiem na Kraków',
      purpose: 'Na sprzedaż',
      market: 'Rynek wtórny',
      type: 'Apartament',
      price: 299999,
      metrage: 99,
      rooms: 4,
      mainImgUrl: third,
      imgUrlArr: [],
      propertyPlanUrl: 'xxx',
      oldCase: false,
      floor: 10,
      numbOfFloors: 10,
      elevator: true,
      kitchen: 'Kuchnia otwarta z oknem',
      standard: 'Wysoki',
      balcony: ['Taras', 'Ogródek'],
      garage: 'Garaż',
      year: 2010,
      technology: 'Pustak ceramiczny',
      extra: ['Pod inwestycje', 'Tylko u nas', 'Obniżona cena', 'Pilne']
    },
    {
      propertyId: 4,
      propertyName: 'Mieszkanie na Zabłociu',
      propertyDescription: 'Mieszkanie z garażem podziemnym',
      purpose: 'Na sprzedaż',
      market: 'Rynek wtórny',
      type: 'Mieszkanie',
      price: 299999,
      metrage: 70,
      rooms: 2,
      mainImgUrl: second,
      imgUrlArr: [],
      propertyPlanUrl: 'xxx',
      oldCase: false,
      floor: 8,
      numbOfFloors: 8,
      elevator: true,
      kitchen: 'Kuchnia otwarta z oknem',
      standard: 'Wysoki',
      balcony: ['Taras', 'Ogródek'],
      garage: 'Garaż',
      year: 2010,
      technology: 'Pustak ceramiczny',
      extra: ['Pod inwestycje', 'Tylko u nas', 'Obniżona cena', 'Pilne']
    }
  ]
};

const propertiesReducer = (state = initialState, action) => {
  return state;
};

export default propertiesReducer;
