type RatingInfo = {
  score: number,
  numberAmount: number
}

type DescriptionType = {
  firstPart: string,
  secondPart: string,
}

export type FilmsMock = {
  id: string,
  name: string,
  genre: string,
  year: number,
  img: string,
  isInUsersList: boolean,
  rating: RatingInfo,
  descriptionText: DescriptionType,
  director: string,
  starring: string,
  video: string,
}
