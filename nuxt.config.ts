// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "title", content: "Flameyfox - Web Developer" },
        {
          name: "description",
          content:
            "Web developer based in Odense, Denmark. Making minimalistic design and solutions with approachable UX",
        },
        { name: "robots", content: "index" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Flameyfox - Web Developer" },
        {
          property: "og:description",
          content:
            "Web developer based in Odense, Denmark. Making minimalistic design and solutions with approachable UX",
        },
        { property: "og:url", content: "https://flameyfox.com" },
        { property: "og:site_name", content: "Flameyfox" },
      ],
      link: [
        { rel: "canonical", href: "https://flameyfox.com" },
        { rel: "preconnect", href: "https://fonts.bunny.net" },
        {
          rel: "stylesheet",
          href: "https://fonts.bunny.net/css?family=nunito:200,400,600,700",
        },
        { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://flameyfox.com", // Replace with your actual site URL

    // Dynamically fetch blog routes
    routes: async () => {
      const posts = await queryContent("/blog").find();
      return posts.map((post) => post._path);
    },
  },
  css: ["~/assets/css/blog.css"],
  compatibilityDate: "2024-12-15",
});
