// .projentryrc.js

module.exports = {
    getStarted: [
        "/docs/get-started.md",
    ],
    conventions: [
        "/pages/readme.md",
        "/features/readme.md",
    ],
    issues: [
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
