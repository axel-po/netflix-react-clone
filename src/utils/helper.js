import { TYPE_TV, TYPE_MOVIE } from "../config";
import { imagePathOriginal } from "../config";

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomType() {
  return [TYPE_TV, TYPE_MOVIE][getRandomIntInclusive(0, 1)];
}
export function getRandomMovie() {
  const moviesIds = [399566, 602734, 579047, 385128, 615658];
  return moviesIds[getRandomIntInclusive(0, moviesIds.length - 1)];
}
export function getRandomSerie() {
  const tvIds = [71446, 60574, 1399, 66732];
  return tvIds[getRandomIntInclusive(0, tvIds.length - 1)];
}
export function getRandomId(type = TYPE_MOVIE) {
  return type === TYPE_TV ? getRandomSerie() : getRandomMovie();
}

export const buildImagePath = (data) => {
  const image = data?.backdrop_path;
  return `${imagePathOriginal}${image}`;
};
