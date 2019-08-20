// Sequelize 인스턴스
const sequelize = require('./sequelize.connection');

/**
 * Sequelize 모델 인스턴스
 */
const Category = require('./sequelize.model.category');
const Product = require('./sequelize.model.product');
const Tag = require('./sequelize.model.tag');

/**
 * 데이터베이스 리셋.
 * (주: 모든 데이터 삭제)
 */
function resetDatabase() {
    return sequelize
        .transaction() // 'Unmanaged Transaction' - commit과 rollback을 직접 호출.
        .then(t => {
            // 쿼리 공통 옵션
            const options = { logging: console.log, raw: true, transaction: t };

            return Promise.resolve()
                .then(
                    /**
                     * 테이블 삭제 전 FK 체크 비활성화.
                     * (조인 테이블 삭제 오류 방지)
                     */
                    function disableForeignKeyChecks() {
                        return sequelize.query(
                            'SET FOREIGN_KEY_CHECKS = 0;',
                            null,
                            options
                        );
                    }
                )
                .then(
                    /**
                     * 테이블 삭제
                     */
                    function dropTables() {
                        return Promise.all(
                            [
                                'categories',
                                'categoryRelationships',
                                'products',
                                'tags',
                                'productTags'
                            ].map(table => {
                                return sequelize.query(
                                    'DROP TABLE IF EXISTS `' + table + '`;',
                                    null,
                                    options
                                );
                            })
                        );
                    }
                )
                .then(
                    /**
                     * 테이블 삭제 후 FK 체크 활성화.
                     */
                    function enableForeignKeyChecks() {
                        return sequelize.query(
                            'SET FOREIGN_KEY_CHECKS = 1;',
                            null,
                            options
                        );
                    }
                )
                .then(
                    /**
                     * 트랜잭션 commit 호출.
                     */
                    function commitTransaction() {
                        return t.commit();
                    }
                )
                .catch(
                    /**
                     * 에러. 트랜잭션 rollback 호출.
                     */
                    function rollbackTransaction() {
                        return t.rollback();
                    }
                );
        });
}

/**
 * Sequelize 모델 초기화
 */
async function initializeModels() {
    await Category.initialize();
}

/**
 * Sequelize Associations 설정
 */
function defineAssociations() {
    return Promise.resolve()
        .then(() => {
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
        });
        // .then(() => {
        //     /**
        //      * MANY (Products)
        //      * TO
        //      * MANY (Tags)
        //      */
        //     Product.belongsToMany(Tag, {
        //         as: { singular: 'product', plural: 'products' },
        //         through: 'productTags',
        //         foreignKey: 'product_id',
        //         otherKey: 'tag_id'
        //     });
        //     Tag.belongsToMany(Product, {
        //         as: { singular: 'tag', plural: 'tags' },
        //         through: 'productTags',
        //         foreignKey: 'tag_id',
        //         otherKey: 'product_id'
        //     });
        //     console.log('2');
        // });
}

/**
 * 샘플 데이터 생성
 */
function generateSampleData() {}

/**
 * 데이터베이스 초기화
 */
async function initDatabase() {
    console.log('[DB] RESET DATABASE...');
    await resetDatabase(); // 모든 테이블 드랍. (주: 모든 데이터 삭제)
    console.log('[DB] DEFINE ASSOCIATIONS...');
    await defineAssociations(); // 데이터베이스 테이블 간 관계 설정 (Associations)
    console.log('[DB] DONE');
}

exports.initDatabase = initDatabase;
