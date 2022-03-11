const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "419210bbe8ce570ae08cc4023c6a015a",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
