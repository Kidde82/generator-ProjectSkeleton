const src = "src";
const build = "build";
const wwwroot = "wwwroot";
const apps = "apps";
const assets = "assets";

<%_ for (app in apps) { -%>
const <%= apps[app] %> = "<%= apps[app] %>"
<%_ } -%>

module.exports = {
	src: {
		path: `./${src}`,
		assets: {
			images: `/${assets}/images`
		},
		<%_ for (app in apps) { -%>
		<%= apps[app] %>: {
			path: src,
			html: `./${src}/${apps}/${<%= apps[app] %>}/**/*.html`,
			ts: `./${src}/${apps}/${<%= apps[app] %>}/**/*.ts`,
			spec: `./${src}/${apps}/${<%= apps[app] %>}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${<%= apps[app] %>}/**/*.scss`
		}<% if (app < apps.length) { %>,<% } %>
		<%_ } -%>
	},
	build: {
		path: build,
		<%_ for (app in apps) { -%>
		<%= apps[app] %>: {
			path: `${build}/${apps}/${<%= apps[app] %>}/`,
			js: `${build}/${apps}/${<%= apps[app] %>}/**/*.js`,
			spec: `${build}/${apps}/${<%= apps[app] %>}/**/*.spec.js`,
			css: `${build}/${apps}/${<%= apps[app] %>}/**/*.css`
		},
		<%_ } -%>
		js: `${build}/**/*.js`,
		spec: `${build}/**/*.spec.js`,
		css: `${build}/**/*.css`,
		artifacts: [
			`./${build}/**/*.css`,
			`./${build}/**/*.js`,
			`!./${build}/**/*.spec.js`
		]
	},
	wwwroot: {
		path: `${wwwroot}`,
		apps: {
			path: `./${wwwroot}/${apps}`
		},
		<%_ for (app in apps) { -%>
		<%= apps[app] %>: {
			templateName: "<%= apps[app] %>.templates",
			path: `./${wwwroot}/${apps}/${<%= apps[app] %>}`
		}<% if (app < apps.length) { %>,<% } %>
		<%_ } -%>
	},
	cleanPaths: [
		`${build}`,
		`${wwwroot}/${apps}`
	],
	lint: {
		style: "stylelint.yml"
	},
	typings: {
		definitions: "./typings/**/*.d.ts"
	}
};