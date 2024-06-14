export class Game {
    id: number;
    title: string;
    developer: string;
    publisher: string;
    platform: [];
    genres: [];
    releaseDate: string;
    description: string;
    cover: string;
    banner: string;
    screenshots: [];
    rating: number;

    constructor(id: number, title: string, developer: string, publisher: string, platform: [], genres: [], releaseDate: string, description: string, cover: string, banner: string, screenshots: [], rating: number) {
        this.id = id;
        this.title = title;
        this.developer = developer;
        this.publisher = publisher;
        this.platform = platform;
        this.genres = genres;
        this.releaseDate = releaseDate;
        this.description = description;
        this.cover = cover;
        this.banner = banner;
        this.screenshots = screenshots;
        this.rating = rating;
    }
}