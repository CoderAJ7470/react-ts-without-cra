A practice project where I create a React app without using create-react-app (CRA).

### Some notes:

To create a React project without CRA, I followed the following two tuorials:

- [Tutorial one](https://www.youtube.com/watch?v=h3LpsM42s5o).
- [Tutorial Two](https://www.youtube.com/watch?v=6Jek_IXXGz0&list=PLkqiWyX-_LouMp96EoFauiPlPPu9z3Rjl&index=1)

I ran the following commands in the terminal or GitBash for initial setup:

1. npm install react
2. npm install react-dom
3. npm install webpack --save-dev
4. npm install webpack-cli --save-dev
5. npm install webpack-dev-server --save-dev
6. npm install @babel/core --save-dev
7. npm install babel-loader --save-dev
8. npm install @babel/preset-react --save-dev
9. npm install @babel/preset-env --save-dev
10. npm install html-webpack-plugin --save-dev

Something to keep in mind: the tutorial (first video) has you call the render method from ReactDOM i.e. `ReactDOM.render(<App />, document.getElementById('root'))` - this works only for React version below v 18.0.

To create the root and the entry point correctly for React 18.0 and above, use the createRoot method from the ReactDOMClient like so:
`const root = ReactDOMClient.createRoot(document.getElementById('root'))`. Then you can just call the render method: `root.render(<App />)`. You do need to import both, React and ReactDOMClient at the top of the App.js file where you set up the entry point for the app.
