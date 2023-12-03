# React-router-dom

```javascript
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "user/:userId",
        element: <User />,
        children: [{ path: "userInfo", element: <UserInfo /> }],
      },
    ],
  },
]);

export default Router;
```

children에 접근하기 => user/:userId/userInfo
