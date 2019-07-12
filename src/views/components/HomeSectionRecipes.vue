<template>
  <section component="home-section-recipes">
    <div class="row">
      <div class="col text-center">
        <h1 class="text-cursive display-1">
          Recipes
        </h1>
      </div>
      <!-- .col -->
    </div>
    <!-- .row -->
    <div class="row">
      <div
        v-for="(recipe, index) in recipes"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="card mb-12">
          <!-- 대표 이미지: BEGIN -->
          <img
            :src="recipe.IMG_URL"
            :alt="recipe.RECIPE_NM_KO"
            class="card-img-top"
          />
          <!-- 대표 이미지: END -->

          <div class="card-body">
            <!-- 배지 그룹: BEGIN -->
            <div class="d-flex flex-wrap">
              <span
                v-for="key in [
                  'NATION_NM', // 유형 분류
                  'TY_NM', // 음식 분류
                  'QNT', // 분량
                  'LEVEL_NM', // 난이도
                  'COOKING_TIME' // 조리 시간
                ]"
                :key="key"
                class="badge badge-primary mr-2"
              >
                {{ recipe[key] }}
              </span>
            </div>
            <!-- 배지 그룹: END -->

            <!-- 타이틀: BEGIN -->
            <h5 class="card-title">
              {{ recipe.RECIPE_NM_KO }}
            </h5>
            <!-- 타이틀: END -->

            <!-- 소개: BEGIN -->
            <p class="card-text">
              {{ recipe.SUMRY }}
            </p>
            <!-- 소개: END -->
          </div>
          <!-- .card-body -->
        </div>
        <!-- .card -->
      </div>
      <!-- .col-12 col-md-6 col-lg-4 -->
    </div>
    <!-- .row -->
  </section>
  <!-- [component="home-section-recipes"] -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ComponentHomeSectionRecipes',
  computed: {
    ...mapGetters({
      recipes: 'getAllRecipes'
    })
  }
};
</script>

<style lang="scss" scoped></style>
