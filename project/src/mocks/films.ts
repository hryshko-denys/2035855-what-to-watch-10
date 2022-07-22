import { FilmsMock } from './types';

const filmsMock: FilmsMock[] = [
  {
    id: '1',
    genre: 'Kids & Family',
    year: 2014,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    isInUsersList: true,
    rating: {
      score: 8.2,
      numberAmount: 260,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '2',
    genre: 'Kids & Family',
    year: 2015,
    name: 'Bohemian Rhapsody',
    img: 'img/bohemian-rhapsody.jpg',
    isInUsersList: false,
    rating: {
      score: 8.2,
      numberAmount: 260,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '3',
    genre: 'Horror',
    year: 2015,
    name: 'Macbeth',
    img: 'img/macbeth.jpg',
    isInUsersList: true,
    rating: {
      score: 8.5,
      numberAmount: 360,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '4',
    genre: 'Romance',
    year: 2010,
    name: 'Aviator',
    img: 'img/aviator.jpg',
    isInUsersList: true,
    rating: {
      score: 4.2,
      numberAmount: 1260,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '5',
    genre: 'Dramas',
    year: 2012,
    name: 'We need to talk about Kevin',
    img: 'img/we-need-to-talk-about-kevin.jpg',
    isInUsersList: true,
    rating: {
      score: 8.9,
      numberAmount: 2640,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '6',
    genre: 'Crime',
    year: 2004,
    name: 'What We Do in the Shadows',
    img: 'img/what-we-do-in-the-shadows.jpg',
    isInUsersList: false,
    rating: {
      score: 8.5,
      numberAmount: 240,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '7',
    genre: 'Crime',
    year: 2016,
    name: 'Revenant',
    img: 'img/revenant.jpg',
    isInUsersList: false,
    rating: {
      score: 8.9,
      numberAmount: 1260,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '8',
    genre: 'Comedies',
    year: 2006,
    name: 'Johnny English',
    img: 'img/johnny-english.jpg',
    isInUsersList: false,
    rating: {
      score: 7.2,
      numberAmount: 460,
    },
    descriptionText: {
      firstPart: `In the 1930s, the Grand Budapest Hotel is a popular European
        ski resort, presided over by concierge Gustave H. (Ralph
        Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend
        and protege.`,
      secondPart: `Gustave prides himself on providing first-className service to the
        hotel&apos;s guests, including satisfying the sexual needs of the
        many elderly women who stay there. When one of Gustave&apos;s
        lovers dies mysteriously, Gustave finds himself the recipient
        of a priceless painting and the chief suspect in her murder.`,
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
];

export default filmsMock;
