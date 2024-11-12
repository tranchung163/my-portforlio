import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
        {children}
        </div>
  )
}

Layout.propTypes = {}

export default Layout