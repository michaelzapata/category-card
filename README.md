# category-card

> El componente `CategoryCard` es una tarjeta de categoría de React que muestra una imagen de fondo y un nombre de categoría. Al hacer clic en la tarjeta, se puede ejecutar una acción definida por el usuario.

[![NPM](https://img.shields.io/npm/v/category-card.svg)](https://www.npmjs.com/package/category-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save category-card
```

## Props

El componente acepta las siguientes propiedades:

- `imageUrl` (string, requerido): La URL de la imagen de fondo que se mostrará en la tarjeta.
- `onClick` (función, opcional): Una función que se ejecutará cuando se haga clic en la tarjeta.
- `categoryName` (string, requerido): El nombre de la categoría que se mostrará en la tarjeta.

## Usage

```jsx
import React from 'react';
import CategoryCard from './CategoryCard';

function App() {
  const handleCategoryClick = () => {
    alert('Hiciste clic en la categoría');
  };

  return (
    <div>
      <CategoryCard
        imageUrl="URL_DE_TU_IMAGEN"
        onClick={handleCategoryClick}
        categoryName="Nombre de la Categoría"
      />
    </div>
  );
}

export default App;
```

## License

MIT © [michaelzapata](https://github.com/michaelzapata)
