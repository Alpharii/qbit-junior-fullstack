'use client';
import { useState } from 'react';
import { Menu, MenuItem, ProductItem } from './ui/NavbarMenu';

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <a href="#about">
        <MenuItem setActive={setActive} active={active} item="Home">
          Home
        </MenuItem>
      </a>
      <a href="#about">
        <MenuItem setActive={setActive} active={active} item="About Us">
          About Us
        </MenuItem>
      </a>
      <a href="#products">
        <MenuItem setActive={setActive} active={active} item="Products">
          <ProductItem
            title="Product 1"
            description="Description of Product 1"
            href="#product-1"
            src="/images/product-1.jpg"
          />
          <ProductItem
            title="Product 2"
            description="Description of Product 2"
            href="#product-2"
            src="/images/product-2.jpg"
          />
        </MenuItem>
      </a>
      <a href="#contact">
        <MenuItem setActive={setActive} active={active} item="Contact">
          Contact Us
        </MenuItem>
      </a>
    </Menu>
  );
};

export default Navbar;
