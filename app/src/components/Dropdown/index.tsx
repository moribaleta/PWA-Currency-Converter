import React, { ChangeEventHandler } from 'react';

import { Currency } from 'shared';

type DropdownProps = {
  list: Currency[];
  onSetCurrency: (name: string) => void;
};

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  list,
  onSetCurrency,
}) => {
  const renderItem = (item: Currency) => {
    return (
      <option value={item.name}>
        {item.symbol} - {item.name}
      </option>
    );
  };

  const onValueChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onSetCurrency(event.target.value);
  };

  return (
    <div>
      <select onChange={onValueChange}>{list.map(renderItem)}</select>
    </div>
  );
};

export default Dropdown;
