import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/build-css-loader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve = config.resolve || {};
  config.resolve.modules = config.resolve.modules || [];
  config.resolve.modules.push(paths.src);
  config.resolve.extensions = config.resolve.extensions || [];
  config.resolve.extensions.push(".ts", ".tsx");

  config.module = config.module || {};
  config.module.rules = config.module.rules || [];

  // eslint-disable-next-line no-param-reassign
  config.module.rules = (config.module.rules as RuleSetRule[]).map(
    (rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }
  );

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
};
