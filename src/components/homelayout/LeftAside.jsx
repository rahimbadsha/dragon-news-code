import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
      <div>
        <Suspense fallback={<p>Categories...</p>}>
          <Categories></Categories>
        </Suspense>
      </div>
    );
};

export default LeftAside;