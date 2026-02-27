# valtio-multiple-react-versions

This is a reproduction of an issue when using Valtio in a monorepo with multiple React versions.

Packages:

- `react-18-app`, `react-18-app2` - only package.json with React v18 in dependencies
- `react-19-app-ssr` - React Router app with React v19 and SSR, uses `useSnapshot()` from Valtio
- `shared-state` - shared state management package, uses `proxy()` from Valtio

This setup causes Yarn to install Valtio in two places:

- root `node_modules`, with React v18 as peer dependency
- `packages/react-19-app-ssr/node_modules`, with React v19 as peer dependency

`shared-state` package uses Valtio from root node_modules, while `react-19-app-ssr` uses Valtio from its own node_modules.

## Reproduction steps

1. Clone the repo
2. Install dependencies using `yarn install`
3. Run `yarn dev`
4. Open http://localhost:5173 in the browser
5. Observe `Please use proxy object` and `TypeError: proxyState is not iterable` in the terminal and the browser

## [Discussion](https://github.com/pmndrs/valtio/discussions/1205)
