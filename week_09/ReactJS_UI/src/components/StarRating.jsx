function StarRating({ count }) {
  return (
    <span className="stars" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < count ? 'star active' : 'star'}>
          {'\u2605'}
        </span>
      ))}
    </span>
  )
}

export default StarRating
