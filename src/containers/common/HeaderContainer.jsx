import React, { useCallback, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Header from '../../components/common/Header';

const HeaderContainer = ({ blue = 0 }) => {
  const location = useLocation();

  const [dropDownMenuActive, setDropdownMenuActive] = useState(false);

  const handleDropdownMenuActive = useCallback(() => {
    setDropdownMenuActive(!dropDownMenuActive);
  }, [dropDownMenuActive]);

  return (
    <Header
      onDropdownMenuActive={handleDropdownMenuActive}
      dropDownMenuActive={dropDownMenuActive}
      blue={blue}
      location={location}
    />
  );
};

export default HeaderContainer;
