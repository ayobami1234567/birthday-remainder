import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map((people)=>{
      const{id, name, age, image} = people;
      return (
        <article key={id} className='person'>
          <img src={image} alt=""  alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age}years</p>
          </div>
        </article>
      )
    })}
    </>
  );
};

export default List;
