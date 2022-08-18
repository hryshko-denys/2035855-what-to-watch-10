type DetailsBlockComponentProps = {
  heading: string,
  content: string | string[]
}

function DetailsBlock({ heading, content }: DetailsBlockComponentProps): JSX.Element {
  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">
        {heading}
      </strong>
      {typeof content === 'string' ? (
        <span className="film-card__details-value">
          {content}
        </span>
      ) : (
        <>
          {content.map((starringItem, index) => (
            <span key={starringItem} className="film-card__details-value">
              {starringItem}
            </span>
          ))}
        </>
      )}

    </p>
  );
}

export default DetailsBlock;
