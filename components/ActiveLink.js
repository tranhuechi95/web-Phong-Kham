import React, { Children } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

const ActiveLink = ( { router, children, ...props }) => {
    const child = Children.only(children);
    
    let className = child.props.className || '';
    // we determine if the current path name matches the href prop of the component, and if so we append the "active" class to the children ( we get the class "active" from props.activeClassName)
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className !== null ? className: ''} ${props.activeClassName}`.trim()
    };

    delete props.activeClassName;

return (<Link {...props}>{React.cloneElement(child, {className})}</Link>);
};

export default withRouter(ActiveLink);
