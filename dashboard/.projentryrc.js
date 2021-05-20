// .projentryrc.js

module.exports = {
    docs: {
        getStarted: {
            paths: [
                "/docs/get-started.md",
            ],
        }
        conventions: {
            paths: [
                "/pages/readme.md",
                "/features/readme.md",
            ],
        },
    }
    issues: {
        visibleLinesDelta: 3,
        types: [
            {
                tag: "lowCoupling",
                description: "Сильная связность модулей. Будет зарезолвлено в ближайшее время",
                severity: 4,
            },
            {
                tag: "dry",
                description: "Повторение логики. Присмотреться к вынесению в общеиспользуемое",
                severity: 2,
            },
        ]
    }
}
