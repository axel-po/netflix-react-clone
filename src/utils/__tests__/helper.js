import { getRandomIntInclusive, getRandomMovie, getRandomType, getRandomSerie, getRandomId } from "../helper";
import { TYPE_MOVIE, TYPE_TV } from "../../config";

test("Retourne un nombre entier aléatoire", () => {
  const min = 0;
  const max = 10;
  expect(getRandomIntInclusive(min, max)).toBeGreaterThanOrEqual(min);
  expect(getRandomIntInclusive(min, max)).toBeLessThanOrEqual(max);
});

test("Retourne un type aléatoire", () => {
  const types = [TYPE_MOVIE, TYPE_TV];
  expect(types).toContain(getRandomType());
});

test("Retourne un film aléatoire", () => {
  const moviesID = [399566, 602734, 579047, 385128, 615658];
  expect(moviesID).toContain(getRandomMovie());
});

test("Retourne une série aléatoire", () => {
  const seriesID = [71446, 60574, 1399, 66732];
  expect(seriesID).toContain(getRandomSerie());
});

test("Retourne une série ou un film aléatoire", () => {
  const moviesID = [399566, 602734, 579047, 385128, 615658];
  const seriesID = [71446, 60574, 1399, 66732];
  expect(moviesID).toContain(getRandomId(TYPE_MOVIE));
  expect(seriesID).toContain(getRandomId(TYPE_TV));
});

