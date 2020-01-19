import React, {useState} from 'react';
import sources from './strings/source.json';

export function Cites() {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className = 'sources-container'>
      <div className = 'sources-trigger' onClick={() => {showMore === true ? setShowMore(false) : setShowMore(true)}}>
        {showMore === true && <p>Hide sources</p>}
        {showMore === false && <p>Show sources</p>}
      </div>
      {showMore &&
      <div className = 'sources'>
        {sources.map(source => {
          return (
            <div className = 'source' id = {source.id}>
              <p className = 'part'>{source.section}</p>
              <a className = 'link' href={source.link}>{source.name}</a>
            </div>
          );
        })}
      </div>}
    </div>
  );
}
