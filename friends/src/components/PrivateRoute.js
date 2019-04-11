const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {}
      }
    />
  )
}

export default PrivateRoute;