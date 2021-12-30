export default (meta) => {
    const type = "website";
    const url = "https://landing.onjourney.id";
    const title = "On Journey";
    const description =
    "Connecting Traveller with Travel Agent to Explore Hidden Gem Destinations.";
    const mainImage = "";
    const twitterSite = "@onjourneyid";
    const twitterCard = "summary_large_image";

    return [
        {
            hid: "description",
            name: "description",
            content: (meta && meta.description) || description,
        },
        {
            hid: "og:type",
            property: "og:type",
            content: (meta && meta.type) || type,
        },
        {
            hid: "og:url",
            property: "og:url",
            content: (meta && meta.url) || url,
        },
        {
            hid: "og:title",
            property: "og:title",
            content: (meta && meta.title) || title,
        },
        {
            hid: "og:description",
            property: "og:description",
            content: (meta && meta.description) || description,
        },
        {
            hid: "og:image",
            property: "og:image",
            content: (meta && meta.mainImage) || mainImage,
        },
        { 
            name: "twitter:site",
            content: (meta && meta.twitterSite) || twitterSite 
        },
        { 
            name: "twitter:card", 
            content: (meta && meta.twitterCard) || twitterCard 
        },
        {
            name: "twitter:url",
            content: (meta && meta.url) || url,
        },
        {
            name: "twitter:title",
            content: (meta && meta.title) || title,
        },
        {
            name: "twitter:description",
            content: (meta && meta.description) || description,
        },
        {
            name: "twitter:image",
            content: (meta && meta.mainImage) || mainImage,
        },
    ];
};