import React,{ useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './gomoku.css';

const Gomoku = ({ cols, rows, tileSize, ...props }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.cols = cols * tileSize;
        canvas.rows = rows * tileSize;

        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, cols *tileSize, rows * tileSize);
    }, [cols, rows]);

    return (
        <canvas ref={canvasRef}></canvas>
    );
};

Gomoku.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    tileSize: PropTypes.number,
};

Gomoku.defaultProps = {
    cols: 16,
    rows: 16,
    tileSize: 10,
};

export default Gomoku;