import { Link } from 'react-router-dom';

export const Logo = () => {
  const logoItems = [
    {
      item: (
        <img
          src="/leafIcon.png"
          alt="E-Kea Comm logo"
          className="max-w-20 p-2 md:max-w-[100px]"
        />
      ),
    },
    { item: <h1 className="text-2xl md:text-4xl md:pl-1">E-Kea Comm</h1> },
  ];

  return (
    <div>
      <Link to="/">
        <ul className="flex flex-row">
          {logoItems.map((logo, index) => (
            <li key={index} className="flex items-center">
              {logo.item}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};
