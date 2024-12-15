<template>
  <section class="flamey">
    <div class="center">
      <nuxt-link class="goback" to="/blog">Go back</nuxt-link>
      <article class="blog-post" v-if="post">
        <p class="date">{{ post.date }}</p>
        <!-- Use ContentDoc to render the content -->
        <ContentDoc :document="post" />
      </article>
      <div v-else>
        <p>Loading post...</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();

// Fetch the post based on the slug
const { data: post } = await useAsyncData(() =>
  queryContent("/blog")
    .where({ _path: `/blog/${route.params.slug}` })
    .findOne()
);

// Set SEO meta tags dynamically
useSeoMeta(() => ({
  title: post?.title,
  description: post?.description,
  ogUrl: `https://flameyfox.com/blog/${route.params.slug}`,
  ogType: "article",
  ogPublishedTime: post?.date,
  keywords: post?.tags?.join(", "),
}));
</script>

<style lang="scss" scoped>
.flamey {
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  a {
    color: inherit;
  }
  span {
    font-size: 0.8rem;
    margin: 10px 0;
    display: block;
    color: #999;
  }

  .center {
    max-width: 900px;
    width: 100%;

    h1 {
      font-size: 3.2rem;
      line-height: 1.15;
      font-weight: 600;
    }

    .date {
      margin-bottom: 0rem;
    }

    h2 {
      font-weight: 600;
      font-size: 2.2rem;
    }
    h3 {
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    p {
      font-weight: 200;
      font-size: 1.1rem;
    }
  }
}
</style>
