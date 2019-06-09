import RecipeDefault from '@/assets/data/recipe_default.json';
import RecipeIngredient from '@/assets/data/recipe_ingredient.json';
import RecipeProcess from '@/assets/data/recipe_process.json';
import {
  includes as _includes,
  filter as _filter,
  orderBy as _orderBy,
  set as _set,
  forEach as _forEach
} from 'lodash';

// 키워드 기준으로 필터링
const recipes = _filter(RecipeDefault.data, recipe => {
  return (
    _includes(recipe.RECIPE_NM_KO, '스테이크') ||
    _includes(recipe.RECIPE_NM_KO, '파스타') ||
    _includes(recipe.RECIPE_NM_KO, '샐러드') ||
    _includes(recipe.RECIPE_NM_KO, '수프') ||
    _includes(recipe.RECIPE_NM_KO, '요구르트') ||
    _includes(recipe.RECIPE_NM_KO, '수정과') ||
    _includes(recipe.RECIPE_NM_KO, '모히또')
  );
});

_forEach(recipes, recipe => {
  // 재료 배열
  _set(
    recipe,
    ['INGREDIENTS'],
    _filter(
      RecipeIngredient.data,
      ingredient => ingredient.RECIPE_ID === recipe.RECIPE_ID
    )
  );

  // 조리 과정 배열
  _set(
    recipe,
    ['PROCESS'],
    _orderBy(
      // 'COOKING_NO' 기준으로 정렬
      _filter(RecipeProcess.data, proc => proc.RECIPE_ID === recipe.RECIPE_ID),
      ['COOKING_NO'],
      ['asc']
    )
  );
});

export default recipes;
