import React from 'react';

export default function CourseCard({title, description, link}) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      {link && (
        <div className="card__footer">
          <a className="button button--primary" href={link}>
            En savoir plus
          </a>
        </div>
      )}
    </div>
  );
} 