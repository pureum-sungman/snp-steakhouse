export default {
  namespaced: true,
  state: {
    stake: [],
    pasta: [],
    salad: [],
    dessert: [],
    beverage: [],
    soup: []
  },
  getters: {},
  mutations: {},
  actions: {
    init() {
      $.getJSON('@/assets/data/recipe_default.json', recipes => {
        console.log(recipes);
      });
    }
  }
};
