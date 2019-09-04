import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = ({ center, stlye, ...props }) => {
    const textAlign = center === false ? {} : { textAlign: "center" };
    return (
        <div className="col-lg-12" style={{ ...textAlign, ...stlye }} {...props}>
            <CircularProgress size={20} /> Loading...
    </div>
    );
};

export default Loading;
