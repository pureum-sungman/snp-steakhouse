// Sequelize 인스턴스
const sequelize = require('./sequelize.connection');

/**
 * 데이터베이스 내 모든 테이블 드랍.
 * (주: 모든 데이터 삭제)
 */
exports.dropTables = () => {
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
};
