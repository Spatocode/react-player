import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Song = ({ name, rating, onRate, onRemove, getSong=f=>f }) =>
    <section className="song" onClick={getSong}>
        <p>{name}</p>
        <i onClick={onRemove} className="fa fa-trash-o remove-button" title="Delete"></i>
        <div className="rating-wrapper">
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>

Song.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Song.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

export default Song