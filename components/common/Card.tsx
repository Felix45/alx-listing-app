import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
        {children}
    </div>
  );
}
export default Card;
