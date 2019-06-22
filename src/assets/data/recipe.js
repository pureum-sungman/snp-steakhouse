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
    _includes(recipe.RECIPE_NM_KO, '녹두죽') ||
    _includes(recipe.RECIPE_NM_KO, '잣죽') ||
    _includes(recipe.RECIPE_NM_KO, '단팥죽') ||
    _includes(recipe.RECIPE_NM_KO, '양송이버섯죽') ||
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

export const recipeData = recipes;
export const recipeCategories = [
  {
    key: 'steak',
    name: '스테이크',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=300', // prettier-ignore
    thumbnailPosition: '50% 50%',
    icon: ''
  },
  {
    key: 'salad',
    name: '샐러드',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=300', // prettier-ignore
    thumbnailPosition: '50% 75%',
    icon: ''
  },
  {
    key: 'pasta',
    name: '파스타',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=300', // prettier-ignore
    thumbnailPosition: '50% 85%',
    icon: ''
  },
  {
    key: 'soup',
    name: '수프',
    thumbnailUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=300', // prettier-ignore
    thumbnailPosition: '50% 50%',
    icon: ''
  },
  {
    key: 'beverage',
    name: '음료',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=300', // prettier-ignore
    thumbnailPosition: '50% 75%',
    icon: ''
  },
  {
    key: 'dessert',
    name: '디저트',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=300', // prettier-ignore
    thumbnailPosition: '50% 50%',
    icon: ''
  }
];
