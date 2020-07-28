import React from 'react';

const MyComponent = props => {
    return <div>My name is { props.name }.</div>
};

MyComponent.defaultProps = {
 name: '기본이름'
};

export default MyComponent;