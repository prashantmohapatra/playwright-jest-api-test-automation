module.exports = {
    verbose: true,
        "transform": {
            "^.+\\.tsx?$": "ts-jest"
        },
        "moduleFileExtensions": [
            "ts",
            "tsx",
            "js",
            "jsx",
            "json",
            "node"
        ],
    testRunner: 'jest-jasmine2',
    setupFilesAfterEnv: ["jest-allure/dist/setup"]
}