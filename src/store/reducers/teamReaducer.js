import img1 from '../../img/team/001.jpg';
import img2 from '../../img/team/002.jpg';
import img4 from '../../img/team/004.jpg';
import img5 from '../../img/team/005.jpg';
import img6 from '../../img/team/006.jpg';

const initialState = {
  team: [
    {
      id: 1,
      name: 'Krzysztof',
      lastName: 'Kozioł',
      description:
        'Negocjuję warunki kupna i sprzedaży nieruchomości. Dbam, aby każda inwestycja generowała jak największe zyski. Moim nowym zainteresowaniem stała się jazda na quadach.',
      img: img1
    },
    {
      id: 2,
      name: 'Wojciech',
      lastName: 'Urbańczyk',
      description:
        'Odpowiadam za prawidłowy przebieg obecnych inwestycji oraz planowanie nowych transakcji. Prywatnie interesuję się historią regionu, z którego pochodzę oraz sportami siłowymi.',
      img: img2
    },
    {
      id: 3,
      name: 'Monika',
      lastName: 'Kubiela',
      description:
        'Moje działania skupiają się na koordynacji pracy biura. Jestem wsparciem zespołu w zakresie księgowo – administracyjnym. Odpoczywam od pracy przy książkach z pogranicza fantasy i kryminału.',
      img: img5
    },
    {
      id: 4,
      name: 'Sylwia',
      lastName: 'Sojka-Jakubik',
      description:
        'W swojej pracy odpowiadam zarówno za działania administracyjne, jak i pozyskiwanie nowych nieruchomości inwestycyjnych. Prywatnie interesuję się podróżowaniem oraz kosmetologią.',
      img: img6
    },
    {
      id: 5,
      name: 'Damian',
      lastName: 'Muzyk',
      description:
        'W firmie zajmuję się analizą opłacalności zakupu nieruchomości na kredyt mieszkaniowy oraz pośrednictwem kredytów hipotecznych. W wolnej chwili lubię jazdę na rowerze oraz bieganie z psem po lesie.',
      img: img4
    }
  ]
};

const teamReducer = (state = initialState, action) => {
  return state;
};

export default teamReducer;
