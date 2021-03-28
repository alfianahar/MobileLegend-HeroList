import React from 'react';
import Card from './Card';

const CardList = ({ Heroes }) => {
    return (
        <div>
            {
                Heroes.map((user, i) => {
                    return (
                        <Card
                        key={i}
                        id={Heroes[i].id}
                        heroname={Heroes[i].heroname}
                        role={Heroes[i].role}
                        role2={Heroes[i].role2}
                        image={Heroes[i].image}
                        specialty={Heroes[i].specialty}
                        specialty2={Heroes[i].specialty2}
                        />
                    );
                })
            }   
        </div>
    );
}

export default CardList;
