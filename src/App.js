//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export const App = ({saludo ,subtitule}) => {
    return (
        //<Fragment>
        <>
            <h1>{saludo}</h1>
            <p>{subtitule}</p>
        </>
        //</Fragment>
    );
}

App.propTypes = {
    saludo: PropTypes.string
}

App.defaultProps = {
    subtitule: 'Esto es un subtitulo'
}