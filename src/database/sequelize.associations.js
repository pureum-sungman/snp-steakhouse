// Sequelize 인스턴스
const sequelize = require('./sequelize.connection');

// Sequelize 모델
const Product = require('./sequelize.model.product');
const Category = require('./sequelize.model.category');
const Tag = require('./sequelize.model.tag');

// Sequelize 헬퍼 함수
const dropTables = require('./sequelize.helpers').dropTables;

dropTables() // 모든 테이블 드랍. (주: 모든 데이터 삭제)
    .then(
        /**
         * 테이블 관계(Associations) 설정
         */
        function defineAssociations() {
            /**
             * MANY (Categories)
             * TO
             * MANY (Categories)
             */
            Category.belongsToMany(Category, {
                as: { singular: 'children', plural: 'childrens' },
                through: 'categoryRelationships',
                foreignKey: 'parent_id',
                otherKey: 'children_id'
            });

            /**
             * MANY (Products)
             * TO
             * MANY (Tags)
             */
            Product.belongsToMany(Tag, {
                as: { singular: 'product', plural: 'products' },
                through: 'productTags',
                foreignKey: 'product_id',
                otherKey: 'tag_id'
            });
            Tag.belongsToMany(Product, {
                as: { singular: 'tag', plural: 'tags' },
                through: 'productTags',
                foreignKey: 'tag_id',
                otherKey: 'product_id'
            });
        }
    );

//         Product.create(
//             {
//                 title: 'Test product 1',
//                 tags: [{ title: 'test tag 1' }, { title: 'test tag 2' }]
//             },
//             {
//                 include: [
//                     {
//                         association: Tag,
//                         as: { singular: 'tag', plural: 'tags' }
//                     }
//                 ]
//             }
//         );
