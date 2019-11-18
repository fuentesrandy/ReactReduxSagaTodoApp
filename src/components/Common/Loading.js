import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Translate } from 'react-localize-redux';

const Loading = ({ center, stlye, ...props }) => {
    const textAlign = center === false ? {} : { textAlign: "center" };
    return (
        <div className="col-lg-12" style={{ ...textAlign, ...stlye }} {...props}>
            <CircularProgress size={20} /> <Translate id={'Loading'} />...
    </div>
    );
};

export default Loading;
