import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {React.Children.map(children, (child) => (
            <div className="header__child">{child}</div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
