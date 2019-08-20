const Sequelize = require('sequelize');
const sequelize = require('./sequelize.connection');

/**
 * 상품 카테고리
 */
class Category extends Sequelize.Model {}

/**
 * 초기화 함수
 */
exports.initialize = function() {
    return new Promise(resolve => {
        const model = Category.init(
            /**
             * 테이블 칼럼
             */
            {
                // 제목
                title: {
                    type: Sequelize.STRING
                },
                // 제목 (부)
                subtitle: {
                    type: Sequelize.STRING
                },
                // 설명 (요약)
                excerpt: {
                    type: Sequelize.STRING
                },
                // 설명
                description: {
                    type: Sequelize.STRING
                }
            },

            /**
             * 설정
             */
            {
                /**
                 * Sequelize 인스턴스 객체
                 */
                sequelize,

                /**
                 * 지정된 이름으로 sequelize 인스턴스 객체의 'models'에서 접근 가능.
                 * foreignKey와 association의 명칭이 자동으로 설정될 때, 해당 값을 참조하여 결정.
                 */
                modelName: 'category',

                /**
                 * 테이블 이름을 직접 설정
                 */
                // tableName: 'categories',

                /**
                 * 타임스탬프 칼럼 추가 (updatedAt, createdAt)
                 */
                timestamps: true,

                /**
                 * 데이터를 삭제할 때 해당 데이터의 row를 완전히 삭제하지 않고,
                 * 'deletedAt' 칼럼을 추가하여 데이터가 삭제된 시기를 기록하여 보관.
                 */
                paranoid: true,

                /**
                 * 'Optimistic Locking' 설정.
                 * 'version' 칼럼을 추가하여 데이터를 저장할 때 검증 과정을 거침.
                 * 최신 버전의 row가 아닐경우, 'OptimisticLockingError' 발생.
                 */
                version: true

                /**
                 * Sequelize의 명칭 선정 방식을 Camel 형식에서 Snake 형식으로 바꾸고 싶을 경우
                 * (camelCase => snake_case)
                 */
                // underscored: true,

                /**
                 * Sequelize는 테이블 이름을 선정할 때,
                 * 기본적으로 'modelName' 요소의 값을 참조하여 자동으로 복수형으로 선정함.
                 * 해당 기능을 해제하고 싶을 경우
                 */
                // freezeTableName: true,
            }
        );
        return resolve(model);
    });
};
