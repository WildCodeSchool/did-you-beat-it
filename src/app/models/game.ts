export class Game {
  id?: number;
  name?: string;
  cover?: string;
  genre?: string[];
  platform?: string[];
  summary?: string;
  score?: number;
  year?: number;

  constructor(
    id?: number,
    name?: string,
    cover?: string,
    genre: string[] = [],
    platform: string[] = [],
    summary?: string,
    score?: number,
    year?: number
  ) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.genre = genre;
    this.platform = platform;
    this.summary = summary;
    this.score = score;
    this.year = year;
  }
}
