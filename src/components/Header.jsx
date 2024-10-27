import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRecipe } from '../slices/recipeSlice';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();

  return (
    <nav className="d-flex bg-green-500 fixed w-full p-5">
      <Link className='text-white font-bold text-2xl' to={'/'}><i class="fa-solid fa-burger"></i> Flavor Fusion
      </Link>
      {insideHome && (
        <div className="flex-grow-1 d-flex justify-content-end ml-[800px]">
          <input
            onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))}
            className="rounded p-2"
            type="text"
            placeholder="Search Recipe"
            style={{ width: '300px' }}
          />
        </div>
      )}
    </nav>
  );
};

export default Header;