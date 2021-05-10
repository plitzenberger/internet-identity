// eslint-disable-next-line
const path = require("path");
const idp_service = path.join(__dirname, "src/frontend/generated/idp_idl.ts");

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "dfx-generated/idp_service": idp_service,
  },
};
