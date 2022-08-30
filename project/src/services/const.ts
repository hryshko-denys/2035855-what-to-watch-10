export enum APIRoute {
  Index = '/',
  Films = '/films',
  Film = '/films/:id',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  MyList = '/mylist',
  Details = 'details',
  Reviews = 'reviews',
  FullReviews = '/films/:id/review',
  Player = '/player/:id',
  NotFoundPage = '*'
}

export enum NameSpace {
  Films = 'FILMS',
  Film = 'FILM',
  User = 'USER',
}

