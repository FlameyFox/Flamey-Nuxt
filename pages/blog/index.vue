<template>
  <section class="flamey">
    <div class="center">
      <nuxt-link class="goback" to="/">Go back</nuxt-link>
      <h1>Blog</h1>
      <div class="post-card" v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
        </NuxtLink>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Fetch blog posts and include '_path' for linking
const { data: posts } = await useAsyncData(() =>
  queryContent().only(["title", "description", "_path"]).find()
);
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
      margin-bottom: 1rem;
    }
    h2 {
      font-weight: 600;
      font-size: 1.8rem;
    }
    h3 {
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    p {
      font-weight: 200;
      font-size: 1rem;
      max-width: 600px;
    }

    .post-card {
      margin-bottom: 2rem;
    }
  }
}
</style>
